const {test, expect} = require('@playwright/test');

//test.use({ browserName: 'webkit'});
 test.only('@Web Browser Context-Validating Error login', async ({browser})=>
 {

    const context = await browser.newContext();
    const page =  await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    // const cardTitles =  page.locator(".card-body a");
    //   page.on('request',request=> console.log(request.url()));
    //   page.on('response',response=> console.log(response.url(), response.status()));
    //   console.log(await page.title());
     await userName.fill("rahulshettyacademy");
     await page.locator("[type='password']").fill("Learning@830$3mK2");
     await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

 });