import { by, element } from "protractor";
import BasePage from './basePage';

class SwaglabsCheckoutOnePage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/checkout-step-one.html";
        this.pageLoaded = () => 1+1;  
        this.first_name = element(by.id("first-name"));
        this.last_name = element(by.id("last-name"));
        this.postal_code = element(by.id("postal-code"));
        this.continue_button = element(by.id('continue'));      
    }
}
export default new SwaglabsCheckoutOnePage();