class OrdersPage {
  constructor(page) {
    this.page = page;
    this.ordersBtn = page.locator('button[routerlink*="myorders"]');
    this.orderRows = page.locator('tbody tr');
  }

  async goToOrders() {
    await this.ordersBtn.click();
  }

  async verifyOrderPresent() {
    await this.orderRows.first().waitFor();
    return true;
  }
}

module.exports = OrdersPage;