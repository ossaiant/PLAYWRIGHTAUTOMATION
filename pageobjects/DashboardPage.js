class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.card-body');
    this.cartBtn = page.locator('button[routerlink*="cart"]');
  }

  async searchProductAddCart(productName) {
    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
      const text = await this.products.nth(i).locator('b').textContent();
      if (text.trim().toLowerCase() === productName.toLowerCase()) {
        await this.products.nth(i).locator('text=Add To Cart').click();
        break;
      }
    }
  }

  async goToCart() {
    await this.cartBtn.click();
  }
}

module.exports = DashboardPage;