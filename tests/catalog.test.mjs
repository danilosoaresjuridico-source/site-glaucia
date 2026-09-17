import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const kits = JSON.parse(readFileSync(new URL("../src/content/kits.json", import.meta.url), "utf8"));

const officialCheckouts = {
  "KF-01": "https://pay.kiwify.com.br/gTxAIDr",
  "KF-05": "https://pay.kiwify.com.br/yT9ZvJS",
};

test("catálogo contém sete kits na ordem controladora", () => {
  assert.deepEqual(
    kits.map((kit) => kit.id),
    ["KF-01", "KF-02", "KF-04", "KF-05", "KF-03", "KF-06", "KF-07"],
  );
});

test("catálogo contém dois ativos e cinco em breve", () => {
  assert.equal(kits.filter((kit) => kit.status === "ativo").length, 2);
  assert.equal(kits.filter((kit) => kit.status === "em_breve").length, 5);
  assert.deepEqual(
    kits.filter((kit) => kit.status === "ativo").map((kit) => kit.id),
    ["KF-01", "KF-05"],
  );
});

test("regras comerciais não permitem venda dos kits futuros", () => {
  for (const kit of kits) {
    assert.match(kit.cor_primaria, /^#[0-9A-F]{6}$/i);
    assert.equal(kit.territorio.length, 4);
    assert.ok(kit.paleta.length >= 5);
    assert.equal(new Set(kit.paleta).size, kit.paleta.length);

    if (kit.status === "ativo") {
      assert.equal(kit.preco, 37);
      assert.ok(kit.capa);
      assert.equal(kit.checkout_url, officialCheckouts[kit.id], `${kit.id} usa o checkout oficial`);
    } else {
      assert.equal(kit.preco, null);
      assert.equal(kit.checkout_url, null);
      assert.equal(kit.capa, null);
    }
  }
});

test("ids e slugs são únicos", () => {
  assert.equal(new Set(kits.map((kit) => kit.id)).size, kits.length);
  assert.equal(new Set(kits.map((kit) => kit.slug)).size, kits.length);
});
