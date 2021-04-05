import { by, element } from "protractor";
import BasePage from './basePage';

class SwaglabsCheckoutCompletePage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/checkout-complete.html";
        this.pageLoaded = () => 1+1;        
    }
}
export default new SwaglabsCheckoutCompletePage();