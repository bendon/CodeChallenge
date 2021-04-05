import { by, element } from "protractor";
import BasePage from './basePage';

class SwaglabsLoginPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com";
        this.pageLoaded = () => 1+1;
        this.username = element(by.id('user-name'));
        this.password = element(by.id('password'));
        this.button = element(by.id('login-button'));
        
    }
}
export default new SwaglabsLoginPage();