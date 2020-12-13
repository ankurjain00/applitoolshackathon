import { Selector, t } from 'testcafe';

class ProductPage {

    constructor() {
        this.blackColorFilter = Selector("#colors__Black")
        this.filterButton = Selector("#filterBtn")
        this.productList = Selector("#product_grid")
        this.firstBlackShoe = Selector('#DIV__colcolmd__210')
        this.secondBlackShoe = Selector('#DIV__colcolmd__235')
        this.xNight = Selector("#DIV__colcolmd__210")
        this.productImgSection = Selector("#DIV__containerm__65")
        this.productDescSection = Selector("#DIV__prodinfove__75")
        this.productPriceSection = Selector("#DIV__collg__86")
        this.shoeName = Selector("#shoe_name")
        this.shoeImg = Selector("#shoe_img")
        this.rating = Selector("#SPAN__rating__76")
        this.description = Selector("#P____83")
        this.newPrice = Selector("#new_price")
        this.oldPrice = Selector("#old_price")
        this.discount = Selector("#discount")
        this.size = Selector("#DIV__row__88")
        this.quantity = Selector("#DIV__row__98")
        this.addToCartButton = Selector("#DIV__btnaddtoca__113")
    }

    async clickOnBlackFilter() {
        await t.click(this.blackColorFilter);
    }

    async clickOnFilterButton() {
        await t.click(this.filterButton);
    }

    async clickOnXNight() {
        await t.click(this.xNight)
    }
}

export default new ProductPage();