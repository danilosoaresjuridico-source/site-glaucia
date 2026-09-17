import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const serviceSlugs = [
  "consulta-integrativa",
  "mapeamento-bioinformacional",
  "biorressonancia",
  "agua-vitalizada",
  "toque-bioeletroquantico",
  "relaxamento-neurofuncional",
  "terreno-biologico",
  "enfermagem-homecare",
];

const kitSlugs = [
  "kit-acalmamento",
  "kit-recomposicao",
  "kit-acolhimento",
  "kit-renovacao",
  "kit-clareza",
  "kit-fluxo",
  "kit-autoafeto",
];

const redirects = [
  ["/index.html", "/"],
  ["/servico-consulta-integrativa.html", "/servicos/consulta-integrativa"],
  ["/servico-mapeamento-bioinformacional.html", "/servicos/mapeamento-bioinformacional"],
  ["/servico-biorressonancia.html", "/servicos/biorressonancia"],
  ["/servico-agua-vitalizada.html", "/servicos/agua-vitalizada"],
  ["/servico-toque-bioeletroquantico.html", "/servicos/toque-bioeletroquantico"],
  ["/servico-relaxamento-neurofuncional.html", "/servicos/relaxamento-neurofuncional"],
  ["/servico-terreno-biologico.html", "/servicos/terreno-biologico"],
  ["/servico-enfermagem-homecare.html", "/servicos/enfermagem-homecare"],
] as const;

test("todas as rotas públicas respondem", async ({ request }) => {
  for (const path of [
    "/",
    "/kit",
    "/robots.txt",
    "/sitemap.xml",
    "/manifest.webmanifest",
    ...serviceSlugs.map((slug) => `/servicos/${slug}`),
    ...kitSlugs.map((slug) => `/kit/${slug}`),
  ]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
});

test("URLs HTML antigas redirecionam diretamente com 308", async ({ request }) => {
  for (const [source, destination] of redirects) {
    const response = await request.get(source, { maxRedirects: 0 });
    expect(response.status(), source).toBe(308);
    expect(response.headers().location, source).toBe(destination);
  }
});

test("slug de kit desconhecido retorna 404 real", async ({ request }) => {
  const response = await request.get("/kit/kit-inexistente");
  expect(response.status()).toBe(404);
});

test("kits futuros não exibem preço, compra ou formulário", async ({ page }) => {
  await page.goto("/kit/kit-recomposicao");
  await expect(page.getByText("Em breve", { exact: true }).first()).toBeVisible();
  await expect(page.getByText(/R\$\s*37/)).toHaveCount(0);
  await expect(page.locator('a[href*="kiwify"]')).toHaveCount(0);
  await expect(page.locator("form")).toHaveCount(0);
});

test("KF-01 mostra checkout oficial e Offer correspondente", async ({ page }) => {
  await page.goto("/kit/kit-acalmamento");
  await expect(page.getByText("R$ 37", { exact: true })).toBeVisible();
  const checkout = page.getByRole("link", { name: "Quero este kit · R$ 37" });
  await expect(checkout).toHaveAttribute("href", "https://pay.kiwify.com.br/gTxAIDr");
  await expect(checkout).toHaveAttribute("target", "_blank");
  await expect(checkout).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.getByText(/checkout oficial/i)).toHaveCount(0);

  const product = await page.locator('script[type="application/ld+json"]').evaluateAll((scripts) =>
    scripts
      .map((script) => JSON.parse(script.textContent || "{}"))
      .find((data) => data["@type"] === "Product"),
  );
  expect(product.offers).toEqual({
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: 37,
    priceCurrency: "BRL",
    url: "https://pay.kiwify.com.br/gTxAIDr",
  });
});

test("KF-05 mostra checkout oficial e Offer correspondente", async ({ page }) => {
  await page.goto("/kit/kit-renovacao");
  await expect(page.getByText("R$ 37", { exact: true })).toBeVisible();
  const checkout = page.getByRole("link", { name: "Quero este kit · R$ 37" });
  await expect(checkout).toHaveAttribute("href", "https://pay.kiwify.com.br/yT9ZvJS");
  await expect(checkout).toHaveAttribute("target", "_blank");
  await expect(checkout).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.getByText(/checkout oficial/i)).toHaveCount(0);

  const product = await page.locator('script[type="application/ld+json"]').evaluateAll((scripts) =>
    scripts
      .map((script) => JSON.parse(script.textContent || "{}"))
      .find((data) => data["@type"] === "Product"),
  );
  expect(product.offers).toEqual({
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: 37,
    priceCurrency: "BRL",
    url: "https://pay.kiwify.com.br/yT9ZvJS",
  });
});

test("menu móvel é operável por teclado e restaura foco", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  const button = page.getByRole("button", { name: "Abrir menu" });
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Fechar menu" })).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(button).toBeFocused();
  await expect(button).toHaveAttribute("aria-expanded", "false");
});

test("propagação frequencial move o pulso e as ondas com movimento normal", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const flow = page.locator("[data-frequency-flow]");
  await expect(flow).toBeVisible();
  await expect(flow).toHaveAttribute("aria-hidden", "true");
  await expect(flow.locator("svg")).toHaveAttribute("focusable", "false");
  await expect(flow.locator("animateMotion")).toHaveAttribute("dur", "10.5s");
  expect(await flow.locator("[tabindex]").count()).toBe(0);

  const activeMotion = await flow.evaluate((element) => ({
    animationName: getComputedStyle(element.querySelector("[data-frequency-waves]")!).animationName,
    animationDuration: getComputedStyle(element.querySelector("[data-frequency-waves]")!).animationDuration,
    animationPlayState: getComputedStyle(element.querySelector("[data-frequency-waves]")!).animationPlayState,
    overflow: getComputedStyle(element).overflowX,
    reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    width: element.getBoundingClientRect().width,
  }));
  expect(activeMotion.reducedMotion).toBe(false);
  expect(activeMotion.animationName).not.toBe("none");
  expect(activeMotion.animationDuration).toBe("10.8s");
  expect(activeMotion.animationPlayState).toBe("running");
  expect(activeMotion.overflow).toBe("hidden");
  expect(activeMotion.width).toBeLessThanOrEqual(await page.evaluate(() => document.documentElement.clientWidth));

  const movingPulse = flow.locator("[data-frequency-pulse] circle").first();
  const pulsePosition = () => movingPulse.evaluate((circle) => {
    const matrix = (circle as SVGGraphicsElement).getScreenCTM();
    if (!matrix) throw new Error("Não foi possível medir a posição do pulso");
    return { x: matrix.e, y: matrix.f };
  });
  const first = await pulsePosition();
  await page.waitForTimeout(850);
  const second = await pulsePosition();
  expect(Math.hypot(second.x - first.x, second.y - first.y)).toBeGreaterThan(20);
});

test("propagação frequencial permanece estática com movimento reduzido", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const flow = page.locator("[data-frequency-flow]");
  const reducedMotion = await flow.evaluate((element) => ({
    moving: getComputedStyle(element.querySelector("[data-frequency-pulse]")!).display,
    reduced: matchMedia("(prefers-reduced-motion: reduce)").matches,
    static: getComputedStyle(element.querySelector("[data-frequency-static-pulse]")!).display,
    waveAnimation: getComputedStyle(element.querySelector("[data-frequency-waves]")!).animationName,
    pathAnimations: [...element.querySelectorAll("[data-frequency-waves] path")].map(
      (path) => getComputedStyle(path).animationName,
    ),
  }));
  expect(reducedMotion.reduced).toBe(true);
  expect(reducedMotion.moving).toBe("none");
  expect(reducedMotion.static).not.toBe("none");
  expect(reducedMotion.waveAnimation).toBe("none");
  expect(reducedMotion.pathAnimations).toEqual(["none", "none", "none"]);

  const staticPulse = flow.locator("[data-frequency-static-pulse] circle").first();
  const position = () => staticPulse.evaluate((circle) => {
    const matrix = (circle as SVGGraphicsElement).getScreenCTM();
    if (!matrix) throw new Error("Não foi possível medir a posição estática do pulso");
    return { x: matrix.e, y: matrix.f };
  });
  const first = await position();
  await page.waitForTimeout(850);
  expect(await position()).toEqual(first);
});

test("botão flutuante do WhatsApp é íntegro, acessível e responsivo", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const button = page.getByRole("link", { name: "Falar com Glaucia pelo WhatsApp" });
  await expect(button).toHaveAttribute("title", "Falar com Glaucia pelo WhatsApp");
  await expect(button).toHaveAttribute("target", "_blank");
  await expect(button).toHaveAttribute("rel", "noopener noreferrer");
  await expect(button).toHaveAttribute("href", /wa\.me\/5517996823466/);
  await expect(button.locator("svg")).toHaveAttribute("focusable", "false");
  await expect(button.locator("svg")).toHaveAttribute("aria-hidden", "true");

  const tooltip = page.getByText("Falar pelo WhatsApp", { exact: true });
  await expect(tooltip).toBeHidden();
  await button.hover();
  await expect(tooltip).toBeVisible();
  await button.focus();
  await expect(tooltip).toBeVisible();

  const desktop = await button.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    const icon = element.querySelector("svg")!.getBoundingClientRect();
    return { height: rect.height, iconHeight: icon.height, iconWidth: icon.width, width: rect.width };
  });
  expect(desktop).toEqual({ height: 56, iconHeight: 29, iconWidth: 29, width: 56 });

  await page.setViewportSize({ width: 360, height: 800 });
  const mobile = await button.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    const icon = element.querySelector("svg")!.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      height: rect.height,
      iconHeight: icon.height,
      iconWidth: icon.width,
      right: rect.right,
      width: rect.width,
    };
  });
  expect(mobile.height).toBe(52);
  expect(mobile.width).toBe(52);
  expect(mobile.iconHeight).toBe(27);
  expect(mobile.iconWidth).toBe(27);
  expect(mobile.right).toBeLessThanOrEqual(360);
  expect(mobile.bottom).toBeLessThanOrEqual(800);
});

test("páginas-chave respondem sem overflow em 360, 768, 1440 e 1920 px", async ({ page }) => {
  for (const width of [360, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: width === 360 ? 800 : 900 });
    for (const path of ["/", "/kit", "/kit/kit-acalmamento", "/servicos/consulta-integrativa"]) {
      await page.goto(path);
      const dimensions = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      expect(dimensions.scroll, `${path} em ${width}px`).toBeLessThanOrEqual(dimensions.client);
    }

    await page.goto("/");
    const menuButton = page.getByRole("button", { name: "Abrir menu" });
    if (width <= 820) await expect(menuButton).toBeVisible();
    else await expect(menuButton).toBeHidden();
  }
});

test("escutá-lo permanece unido sem provocar overflow", async ({ page }) => {
  for (const width of [360, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: width === 360 ? 800 : 900 });
    await page.goto("/servicos/consulta-integrativa");
    const word = page.getByText("escutá-lo?", { exact: true });
    await expect(word).toBeVisible();
    const metrics = await word.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        right: rect.right,
        whiteSpace: getComputedStyle(element).whiteSpace,
      };
    });
    expect(metrics.whiteSpace, `${width}px`).toBe("nowrap");
    expect(metrics.right, `${width}px`).toBeLessThanOrEqual(width);
  }
});

test("escala tipográfica atende aos mínimos e não corta títulos ou botões", async ({ page }) => {
  for (const width of [360, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: width === 360 ? 800 : 900 });
    for (const path of ["/", "/servicos/consulta-integrativa", "/kit", "/kit/kit-acalmamento"]) {
      await page.goto(path);
      const audit = await page.evaluate(({ viewportWidth }) => {
        const visible = (element: Element) => {
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.visibility !== "hidden" && style.display !== "none" && Number(style.opacity) > 0 && rect.width > 1 && rect.height > 1;
        };
        const px = (value: string) => Number.parseFloat(value);
        const label = (element: Element) => element.textContent?.replace(/\s+/g, " ").trim().slice(0, 90) || element.tagName;
        const textElements = [...document.body.querySelectorAll("*")].filter((element) => {
          if (!visible(element) || element.closest("svg") || element.classList.contains("visually-hidden")) return false;
          return [...element.childNodes].some((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim());
        });
        const undersized = textElements
          .filter((element) => px(getComputedStyle(element).fontSize) < 15)
          .map(label);
        const lightParagraphs = [...document.querySelectorAll("p")]
          .filter(visible)
          .filter((element) => Number(getComputedStyle(element).fontWeight) < 400)
          .map(label);
        const paragraphLineHeights = [...document.querySelectorAll("p")]
          .filter(visible)
          .map((element) => {
            const style = getComputedStyle(element);
            return { label: label(element), ratio: px(style.lineHeight) / px(style.fontSize) };
          })
          .filter(({ ratio }) => ratio < 1.59 || ratio > 1.71);
        const clipped = [...document.querySelectorAll("h1, h2, h3, .button")]
          .filter(visible)
          .filter((element) => {
            const rect = element.getBoundingClientRect();
            return element.scrollWidth > element.clientWidth + 1 || rect.left < -1 || rect.right > viewportWidth + 1;
          })
          .map(label);
        const bodySize = px(getComputedStyle(document.body).fontSize);
        const footerSizes = [...document.querySelectorAll("footer p")].filter(visible).map((element) => px(getComputedStyle(element).fontSize));
        const buttonSizes = [...document.querySelectorAll(".button")].filter(visible).map((element) => px(getComputedStyle(element).fontSize));
        const cardTitleSizes = [...document.querySelectorAll('a[href^="/servicos/"] h3, a[href^="/kit/"] h3, article h3')]
          .filter(visible)
          .map((element) => px(getComputedStyle(element).fontSize));

        return { bodySize, buttonSizes, cardTitleSizes, clipped, footerSizes, lightParagraphs, paragraphLineHeights, undersized };
      }, { viewportWidth: width });

      expect(audit.bodySize, `${path} em ${width}px`).toBeGreaterThanOrEqual(width <= 820 ? 17 : 18);
      expect(audit.undersized, `${path} em ${width}px`).toEqual([]);
      expect(audit.lightParagraphs, `${path} em ${width}px`).toEqual([]);
      expect(audit.paragraphLineHeights, `${path} em ${width}px`).toEqual([]);
      expect(audit.clipped, `${path} em ${width}px`).toEqual([]);
      expect(audit.footerSizes.every((size) => size >= 16), `${path} em ${width}px`).toBe(true);
      expect(audit.buttonSizes.every((size) => size >= 15), `${path} em ${width}px`).toBe(true);
      expect(audit.cardTitleSizes.every((size) => size >= 21 && size <= 23), `${path} em ${width}px`).toBe(true);
    }
  }
});

test("páginas-chave não têm violações Axe sérias ou críticas", async ({ page }) => {
  for (const width of [360, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: width === 360 ? 800 : 900 });
    for (const path of ["/", "/kit", "/kit/kit-acalmamento", "/servicos/consulta-integrativa"]) {
      await page.goto(path);
      const result = await new AxeBuilder({ page }).analyze();
      const blocking = result.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""));
      expect(blocking, `${path} em ${width}px: ${blocking.map((item) => item.id).join(", ")}`).toEqual([]);
    }
  }
});

test("links internos das páginas-chave não retornam erro", async ({ page, request }) => {
  for (const path of ["/", "/kit", "/kit/kit-acalmamento"]) {
    await page.goto(path);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((anchors) =>
      [...new Set(anchors.map((anchor) => (anchor as HTMLAnchorElement).getAttribute("href")!).filter(Boolean))],
    );
    for (const href of hrefs) {
      const response = await request.get(href);
      expect(response.status(), `${path} → ${href}`).toBeLessThan(400);
    }
  }
});
