import { by, element } from "protractor";
import BasePage from './basePage';

class SwaglabsCheckoutTwoPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/checkout-step-two.html";
        this.pageLoaded = () => 1+1; 
        this.finish_button = element(by.id("finish"));       
    }
}
export default new SwaglabsCheckoutTwoPage();