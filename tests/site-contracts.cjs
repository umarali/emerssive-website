/* Run after npm run build. Uses only disposable local webhook data. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const { spawn } = require("node:child_process");
const { chromium } = require("@playwright/test");

const artifacts =
  process.env.SITE_TEST_ARTIFACT_DIR ||
  path.join(process.cwd(), "test-results", "site-contracts");
fs.mkdirSync(artifacts, { recursive: true });
const report = { checks: [], errors: [] };
const applications = [];
let browser;
let webhook;
let webhookStatus = 200;
const deliveries = [];
const fields = {
  firstName: "Disposable",
  lastName: "Example",
  companyName: "Local test",
  role: "Developer",
  businessEmail: "test@example.invalid",
  phoneNumber: "",
  solutionType: "AI agents and automation",
  headcount: "1–10",
  annualRevenue: "Pre-revenue",
  projectStage: "Just an idea",
  budget: "$2.5K–$5K",
  timeline: "1–3 months",
  problemSummary: "Disposable local enquiry for delivery verification.",
};
const routes = [
  "/",
  "/consultation",
  "/privacy",
  "/terms",
  "/services/generative-ai",
  "/services/web-mobile",
  "/work/qodex",
  "/work/frontline-education",
  "/work/code3apps",
];
function check(name) {
  report.checks.push(name);
}
async function listen(server) {
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  return server.address().port;
}
async function freePort() {
  const server = http.createServer();
  const port = await listen(server);
  await new Promise((resolve) => server.close(resolve));
  return port;
}
async function startApp(name, extra = {}) {
  const port = await freePort();
  const env = {
    ...process.env,
    NEXT_TELEMETRY_DISABLED: "1",
    NEXT_IGNORE_INCORRECT_LOCKFILE: "1",
  };
  delete env.CONSULTATION_WEBHOOK_URL;
  delete env.CONSULTATION_WEBHOOK_BEARER_TOKEN;
  for (const key of Object.keys(env))
    if (key.startsWith("CONSULTATION_CALENDAR_URL_")) delete env[key];
  Object.assign(env, extra);
  const log = fs.openSync(path.join(artifacts, `${name}.log`), "w");
  const child = spawn(
    process.execPath,
    [
      require.resolve("next/dist/bin/next"),
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    { env, stdio: ["ignore", log, log] },
  );
  fs.closeSync(log);
  applications.push(child);
  const base = `http://127.0.0.1:${port}`;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (child.exitCode !== null)
      throw new Error(`${name} exited with ${child.exitCode}`);
    try {
      if ((await fetch(base)).ok) return base;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`${name} did not become ready`);
}
function form(includeFile = false) {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) body.append(key, value);
  if (includeFile)
    body.append(
      "attachment",
      new Blob(["Disposable attachment"], { type: "text/plain" }),
      "example.txt",
    );
  return body;
}
(async () => {
  try {
    const base = await startApp("unconfigured");
    let response = await fetch(`${base}/api/consultation`, {
      method: "POST",
      body: form(),
    });
    assert.equal(response.status, 503);
    assert.equal((await response.json()).ok, false);
    response = await fetch(`${base}/api/consultation`, {
      method: "POST",
      body: "Not multipart data",
    });
    assert.equal(response.status, 503);
    assert(
      !fs
        .readFileSync(path.join(artifacts, "unconfigured.log"), "utf8")
        .includes(fields.businessEmail),
    );
    check(
      "Unconfigured intake rejects valid and malformed submissions without logging personal fields",
    );

    webhook = http.createServer(async (request, reply) => {
      try {
        const chunks = [];
        for await (const chunk of request) chunks.push(chunk);
        const parsed = await new Request("http://localhost/", {
          method: "POST",
          headers: { "content-type": request.headers["content-type"] },
          body: Buffer.concat(chunks),
        }).formData();
        const values = {};
        for (const [key, value] of parsed)
          values[key] =
            typeof value === "string"
              ? value
              : { name: value.name, content: await value.text() };
        deliveries.push({
          values,
          authorized:
            request.headers.authorization === "Bearer disposable-local-token",
        });
        reply.writeHead(webhookStatus);
        reply.end("local receiver");
      } catch (error) {
        reply.writeHead(500);
        reply.end(error.message);
      }
    });
    const hookPort = await listen(webhook);
    const configured = await startApp("configured", {
      CONSULTATION_WEBHOOK_URL: `http://127.0.0.1:${hookPort}`,
      CONSULTATION_WEBHOOK_BEARER_TOKEN: "disposable-local-token",
    });
    response = await fetch(`${configured}/api/consultation`, {
      method: "POST",
      body: form(true),
    });
    assert.equal(response.status, 200);
    const sent = await response.json();
    assert.equal(sent.mode, "webhook");
    assert.equal(sent.route, "ai");
    assert.equal(new URL(sent.redirectUrl).hostname, "calendar.app.google");
    assert.equal(deliveries.length, 1);
    assert(deliveries[0].authorized);
    for (const [key, value] of Object.entries(fields))
      assert.equal(deliveries[0].values[key], value);
    assert.equal(
      deliveries[0].values.attachment.content,
      "Disposable attachment",
    );
    assert.equal(deliveries[0].values.route, "ai");
    assert(!Number.isNaN(Date.parse(deliveries[0].values.submittedAt)));
    check(
      "Configured webhook receives all original fields, attachment, route, timestamp and authorization",
    );
    response = await fetch(`${configured}/api/consultation`, {
      method: "POST",
      body: new FormData(),
    });
    assert.equal(response.status, 400);
    assert.equal(deliveries.length, 1);
    check("Invalid intake does not reach the webhook");
    webhookStatus = 500;
    response = await fetch(`${configured}/api/consultation`, {
      method: "POST",
      body: form(),
    });
    assert.equal(response.status, 502);
    const rejected = await response.json();
    assert.equal(rejected.ok, false);
    assert(!rejected.error.includes("saved"));
    check("Failed delivery never claims the enquiry was saved");

    browser = await chromium.launch({
      headless: true,
      ...(process.env.PLAYWRIGHT_CHANNEL
        ? { channel: process.env.PLAYWRIGHT_CHANNEL }
        : {}),
    });
    const page = await browser.newPage();
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    const statuses = [];
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of routes) {
        const result = await page.goto(base + route, {
          waitUntil: "networkidle",
        });
        assert.equal(result.status(), 200, route);
        assert.equal(await page.locator("main").count(), 1, route);
        assert.equal(await page.locator("h1").count(), 1, route);
        assert.equal(
          await page.locator("link[rel=canonical]").getAttribute("href"),
          `https://emerssive.com${route === "/" ? "" : route}`,
        );
        assert(
          !(await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth,
          )),
          `${route} overflows at ${width}px`,
        );
        const badAnchors = await page
          .locator('a[href^="#"]')
          .evaluateAll((links) =>
            links
              .filter((link) => !document.getElementById(link.hash.slice(1)))
              .map((link) => link.hash),
          );
        assert.deepEqual(badAnchors, [], route);
        const missing = await page
          .locator("img")
          .evaluateAll(async (images) => {
            for (const image of images) {
              image.loading = "eager";
              try {
                await image.decode();
              } catch {}
            }
            return images
              .filter((image) => !image.complete || image.naturalWidth === 0)
              .map((image) => image.getAttribute("src"));
          });
        assert.deepEqual(missing, [], `${route} has broken images`);
        statuses.push({ route, width, status: result.status() });
        if (route === "/" && [390, 1440].includes(width))
          await page.screenshot({
            path: path.join(artifacts, `after-${width}.png`),
            fullPage: true,
          });
      }
    }
    assert.deepEqual(pageErrors, []);
    report.routes = statuses;
    check(
      "All nine pages pass status, landmarks, canonical, anchors, image and overflow checks at four viewport widths",
    );
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(base);
    await page.getByRole("button", { name: "Menu", exact: true }).focus();
    await page.keyboard.press("Enter");
    assert.equal(
      await page
        .getByRole("button", { name: "Close menu" })
        .getAttribute("aria-expanded"),
      "true",
    );
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("button", { name: "Menu", exact: true })
        .getAttribute("aria-expanded"),
      "false",
    );
    await page.locator("summary").first().focus();
    await page.keyboard.press("Enter");
    assert(
      await page
        .locator("details")
        .first()
        .evaluate((element) => element.open),
    );
    check("Mobile navigation and FAQ work with keyboard controls");
    await page.goto(`${base}/consultation`);
    assert.equal(await page.locator("form").count(), 0);
    assert.equal(
      new URL(
        await page
          .getByRole("link", { name: /Open booking calendar/ })
          .getAttribute("href"),
      ).hostname,
      "calendar.app.google",
    );
    assert.equal(
      await page.locator('a[href="mailto:contact@emerssive.com"]').count(),
      2,
    );
    check(
      "Consultation provides direct booking and email without collecting intake fields",
    );
    await page.emulateMedia({ media: "print" });
    await page.goto(`${base}/privacy`);
    assert.equal(
      await page
        .locator("header")
        .evaluate((element) => getComputedStyle(element).display),
      "none",
    );
    await page.pdf({
      path: path.join(artifacts, "privacy-print.pdf"),
      format: "A4",
      printBackground: true,
    });
    check("Privacy page renders for print with navigation header hidden");
    const noJS = await browser.newContext({
      javaScriptEnabled: false,
      viewport: { width: 390, height: 844 },
    });
    const staticPage = await noJS.newPage();
    await staticPage.goto(base);
    assert(await staticPage.locator("h1").isVisible());
    assert(
      await staticPage
        .getByRole("link", { name: "Read the Qodex.ai story" })
        .isVisible(),
    );
    await staticPage.locator("summary").first().click();
    assert(
      await staticPage
        .locator("details")
        .first()
        .evaluate((element) => element.open),
    );
    await noJS.close();
    check("Homepage evidence and FAQ remain usable without JavaScript");
    const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
    for (const route of routes.slice(1))
      assert(sitemap.includes(`https://emerssive.com${route}`));
    assert.equal((await fetch(`${base}/work/not-a-project`)).status, 404);
    check(
      "Sitemap contains the new pages and unknown project slugs return 404",
    );
  } catch (error) {
    report.errors.push(error.stack || error.message);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    for (const child of applications) {
      if (child.exitCode === null) {
        child.kill("SIGTERM");
        await new Promise((resolve) => child.once("exit", resolve));
      }
    }
    if (webhook) await new Promise((resolve) => webhook.close(resolve));
    fs.writeFileSync(
      path.join(artifacts, "results.json"),
      JSON.stringify(report, null, 2),
    );
    console.log(JSON.stringify(report, null, 2));
  }
})();
