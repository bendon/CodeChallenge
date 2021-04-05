import { by, element } from "protractor";
import BasePage from './basePage';

class SwaglabsInventoryPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/inventory.html";
        this.pageLoaded = () => 1+1
        this.to_add_cart_item = element(by.id('add-to-cart-sauce-labs-bolt-t-shirt'));
        this.cart_items = element(by.css('.shopping_cart_badge'));
        this.cart_link = element(by.className('shopping_cart_link'));
        this.select = element(by.css('select[class="product_sort_container"]'));
        this.inventory_item = element.all(by.css('.inventory_item'));
    }
}
export default new SwaglabsInventoryPage();