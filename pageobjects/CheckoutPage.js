class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.countryInput = page.locator('[placeholder="Select Country"]');
    this.countryDropdown = page.locator('.ta-results');
    this.placeOrderBtn = page.locator('.action__submit');
  }

  async placeOrder() {
    await this.countryInput.type('ind', { delay: 100 });
    await this.countryDropdown.locator('button').first().click();
    await this.placeOrderBtn.click();
  }
}

module.exports = CheckoutPage;