const LoginPage = require('./LoginPage');
const DashboardPage = require('./DashboardPage');
const CartPage = require('./CartPage');
const CheckoutPage = require('./CheckoutPage');
const OrdersPage = require('./OrdersPage');

class POManager {
  constructor(page) {
    this.page = page;
  }

  getLoginPage() {
    return new LoginPage(this.page);
  }

  getDashboardPage() {
    return new DashboardPage(this.page);
  }

  getCartPage() {
    return new CartPage(this.page);
  }

  getCheckoutPage() {
    return new CheckoutPage(this.page);
  }

  getOrdersPage() {
    return new OrdersPage(this.page);
  }
}

module.exports = POManager;