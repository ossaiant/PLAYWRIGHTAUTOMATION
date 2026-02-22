const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const POManager = require('../../pageobjects/POManager');

setDefaultTimeout(60 * 1000); // 60 seconds

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.poManager = new POManager(this.page);
});

After(async function () {
  await this.browser.close();
});