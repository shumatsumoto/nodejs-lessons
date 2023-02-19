import { chromium } from "@playwright/test";

(async () => {
  // @see https://playwright.dev/docs/api/class-browsertype#browser-type-launch
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3001");
  // const htmlStr = await page.content();

  // console.log(htmlStr);

  const pageTitleLocator = page.locator(".navbar-brand");
  const pageTitle = pageTitleLocator.innerText();
  console.log(pageTitle);
  await browser.close();
})();
