class LoginPage {
    constructor(page) {
        this.page = page;
        this.email = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.loginButton = page.locator('#login');
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client', {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

    async validLogin(username, password) {
        await this.email.fill(username);
        await this.password.fill(password);

        await Promise.all([
            this.page.waitForNavigation({
                waitUntil: 'domcontentloaded',
                timeout: 60000
            }),
            this.loginButton.click()
        ]);
    }
}

module.exports = LoginPage;