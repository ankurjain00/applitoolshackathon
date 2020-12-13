import { Selector, t } from 'testcafe';

class ProductPage {
    constructor() {
        this.blackColorFilter = Selector("#colors__Black")
        this.filterButton = Selector("#filterBtn")
    }

    async clickOnBlackFilter() {
        await t.click(this.blackColorFilter);
    }

    async clickOnFilterButton() {
        await t.click(this.filterButton);
    }
}

export default new ProductPage();