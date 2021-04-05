import { by, element } from "protractor";
import BasePage from './basePage';

class SwaglabsCartPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/cart.html";
        this.pageLoaded = () => 1+1;   
        this.checkout_button = element(by.id('checkout'));     
    }
}
export default new SwaglabsCartPage();