import { spawn } from "node:child_process";

const baseUrl = "http://127.0.0.1:3100";
const nextCli = "node_modules/next/dist/bin/next";
const playwrightCli = "node_modules/@playwright/test/cli.js";

const server = spawn(process.execPath, [nextCli, "start", "--hostname", "127.0.0.1", "-p", "3100"], {
  env: process.env,
  stdio: "inherit",
});

async function waitForServer() {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`O servidor de teste encerrou antes de ficar disponível (código ${server.exitCode}).`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // O servidor ainda está iniciando.
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error("O servidor de teste não ficou disponível em 30 segundos.");
}

async function stopServer() {
  if (server.exitCode !== null) return;

  server.kill();
  await new Promise((resolve) => server.once("exit", resolve));
}

let exitCode = 1;

try {
  await waitForServer();
  const tests = spawn(process.execPath, [playwrightCli, "test", ...process.argv.slice(2)], {
    env: { ...process.env, PLAYWRIGHT_BASE_URL: baseUrl, PLAYWRIGHT_REUSE_SERVER: "1" },
    stdio: "inherit",
  });

  exitCode = await new Promise((resolve, reject) => {
    tests.once("error", reject);
    tests.once("exit", (code) => resolve(code ?? 1));
  });
} finally {
  await stopServer();
}

process.exitCode = exitCode;
