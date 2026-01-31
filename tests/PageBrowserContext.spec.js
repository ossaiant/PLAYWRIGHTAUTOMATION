
const {test} = require('@playwright/test');

// test('should navigate to practice page', async ({browser}) => {
// //   const context = await browser.newContext();
// //   const page = await context.newPage();
//   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// });


test('should navigate to practice page', async ({page}) => {

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
});