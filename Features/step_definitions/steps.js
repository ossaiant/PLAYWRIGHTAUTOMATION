const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given(
  'a login to Ecommerce application with username {string} and password {string}',
  async function (username, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
  }
);

When('Add {string} to Cart', async function (productName) {
  const dashboardPage = this.poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(productName);
  await dashboardPage.goToCart();
});

Then(
  'Verify {string} is displayed in the Cart',
  async function (productName) {
    const cartPage = this.poManager.getCartPage();
    const result = await cartPage.verifyProductIsDisplayed(productName);
    expect(result).toBeTruthy();
  }
);

When('Enter valid details and Place the Order', async function () {
  const cartPage = this.poManager.getCartPage();
  await cartPage.checkout();

  const checkoutPage = this.poManager.getCheckoutPage();
  await checkoutPage.placeOrder();
});

Then('Verify order is present in the OrderHistory', async function () {
  const ordersPage = this.poManager.getOrdersPage();
  await ordersPage.goToOrders();
  const result = await ordersPage.verifyOrderPresent();
  expect(result).toBeTruthy();
});