const { setDefaultTimeout, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.browser = await chromium.launch({
    headless: true,   // REQUIRED for Jenkins
    slowMo: 0
  });

  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  if (this.page) {
    await this.page.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});