class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.loginBtn = page.locator('#login');
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async validLogin(username, password) {
    await this.email.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
    await this.page.locator('button[routerlink*="cart"]').waitFor();
  }
}

module.exports = LoginPage;