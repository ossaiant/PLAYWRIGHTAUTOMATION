// features/pageobjects/OrdersReviewPage.js

class OrdersReviewPage {
    constructor(page) {
        this.page = page;
    }

    async searchCountryAndSelect(partialCountry, country) {
        // Implement logic to search for a country and select it
        await this.page.locator('input[placeholder="Select Country"]').fill(partialCountry);
        await this.page.locator(`text=${country}`).click();
    }

    async SubmitAndGetOrderId() {
        // Implement logic to submit the order and get the order ID
        await this.page.locator('button[type="submit"]').click();
        return await this.page.locator('.order-id').textContent();
    }
}

// Export the class directly, not an object
module.exports = OrdersReviewPage;
