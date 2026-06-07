import { existsSync } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const cvHtml = path.join(root, "out", "cv.html");
const outPdf = path.join(root, "out", "cv-marta-gea.pdf");
const publicPdf = path.join(root, "public", "cv-marta-gea.pdf");

if (!existsSync(cvHtml)) {
  console.error("No se encontró out/cv/index.html. Ejecuta npm run build primero.");
  process.exit(1);
}

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.goto(`file://${cvHtml.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const actions = document.querySelector(".cv-actions");
    if (actions) actions.remove();
    document.body.style.background = "#fff";
    document.body.style.padding = "0";
  });

  await page.pdf({
    path: outPdf,
    format: "A4",
    printBackground: true,
    margin: { top: "12mm", right: "12mm", bottom: "12mm", left: "12mm" },
  });

  await copyFile(outPdf, publicPdf);
  console.log(`CV PDF generado: ${outPdf}`);
} finally {
  await browser.close();
}
