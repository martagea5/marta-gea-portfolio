import { existsSync } from "node:fs";
import { copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const cvHtml = path.join(root, "out", "cv.html");
const outPdf = path.join(root, "out", "cv-marta-gea.pdf");
const publicPdf = path.join(root, "public", "cv-marta-gea.pdf");

if (!existsSync(cvHtml)) {
  console.error("No se encontró out/cv.html. Ejecuta npm run build primero.");
  process.exit(1);
}

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();

  // Renderizar siempre con layout de escritorio para el PDF A4
  await page.setViewport({
    width: 794,
    height: 1123,
    deviceScaleFactor: 2,
  });

  await page.goto(`file://${cvHtml.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const actions = document.querySelector(".cv-actions");
    if (actions) actions.remove();

    const pageRoot = document.querySelector(".cv-page");
    if (pageRoot) {
      pageRoot.style.background = "#fff";
      pageRoot.style.padding = "0";
      pageRoot.style.minHeight = "auto";
    }
  });

  await page.emulateMediaType("print");

  const pageCount = await page.evaluate(() => {
    const cv = document.querySelector(".cv");
    if (!cv) return 1;
    const height = cv.scrollHeight;
    const a4 = 1122;
    return Math.ceil(height / a4);
  });

  const scale = pageCount > 1 ? 0.88 : 1;

  await page.pdf({
    path: outPdf,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    scale,
    margin: { top: "8mm", right: "8mm", bottom: "8mm", left: "8mm" },
  });

  await copyFile(outPdf, publicPdf);
  console.log(`CV PDF generado: ${outPdf}`);
} finally {
  await browser.close();
}
