class CartPage {
    constructor(page) {
        this.page = page;
    }

    async VerifyProductIsDisplayed(productName) {
        // Implement logic to verify product is displayed in the cart
        // Example placeholder:
        await this.page.waitForSelector(`text=${productName}`);
    }

    async Checkout() {
        // Implement logic to perform checkout
        // Example placeholder:
        await this.page.locator('button:has-text("Checkout")').click();
    }
}

module.exports = { CartPage };