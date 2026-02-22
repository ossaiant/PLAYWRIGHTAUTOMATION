class OrdersHistoryPage {
  constructor(page) {
    this.page = page;
    this.ordersTable = page.locator("tbody");
  }

  async verifyOrder(orderName) {
    await this.page.waitForSelector("tbody");
    return this.ordersTable.locator("tr").filter({ hasText: orderName }).isVisible();
  }
}

module.exports = { OrdersHistoryPage };