class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProducts = page.locator('.cartSection h3');
    this.checkoutBtn = page.locator('text=Checkout');
  }

  async verifyProductIsDisplayed(productName) {
    const count = await this.cartProducts.count();
    for (let i = 0; i < count; i++) {
      const text = await this.cartProducts.nth(i).textContent();
      if (text.trim().toLowerCase() === productName.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  async checkout() {
    await this.checkoutBtn.click();
  }
}

module.exports = CartPage;