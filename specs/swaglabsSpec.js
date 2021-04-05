import { browser, by, element } from "protractor";
import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";
import swaglabsInventoryPage from "../pages/swagLabsInventoryPage.js";
import swaglabsCartPage from "../pages/swagLabsCartPage";
import swaglabsCheckoutOnePage from "../pages/swagLabsCheckoutOnePage";
import swaglabsCheckoutTwoPage from "../pages/swagLabsCheckoutTwoPage";
import swaglabsCheckoutComplete from "../pages/swagLabsCheckoutComplete";
import swagLabsCartPage from "../pages/swagLabsCartPage";
import swagLabsCheckoutComplete from "../pages/swagLabsCheckoutComplete";
import variables from "../variables";


describe('Swag Labs tests', () => {
    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
       
    });

    it('should log in with standard user', async () => {
        await swaglabsLoginPage.goto();
        await swaglabsLoginPage.loaded();
        swaglabsLoginPage.username.sendKeys(variables.USERNAME);
        browser.sleep(10000);
        swaglabsLoginPage.password.sendKeys(variables.PASSWORD);
        await swaglabsLoginPage.button.click();           
    });

    it('should add an item to the cart', async () => {
        await swaglabsInventoryPage.goto();
        await swaglabsInventoryPage.loaded();
        await swaglabsInventoryPage.to_add_cart_item.click();    
        expect(await swaglabsInventoryPage.cart_items.getText()).toEqual('1');
    });

    it('should have 6 items on the inventory page', async () => {
        swaglabsInventoryPage.inventory_item.
            then(function (el) {
                expect(el.length).toEqual(6);        
            }
            );
    });

    it('should complete the purchase process of an item from the inventory', async () => {
        await swaglabsInventoryPage.cart_link.click()
        await swagLabsCartPage.goto();
        await swaglabsCartPage.loaded();
        await swaglabsCartPage.checkout_button.click();
        await swaglabsCheckoutOnePage.goto();
        await swaglabsCheckoutOnePage.loaded();
        swaglabsCheckoutOnePage.first_name.sendKeys('Bendon');
        swaglabsCheckoutOnePage.last_name.sendKeys('Murgor')
        swaglabsCheckoutOnePage.postal_code.sendKeys('5999')
        await swaglabsCheckoutOnePage.continue_button.click()
        await swaglabsCheckoutTwoPage.goto();
        await swaglabsCheckoutTwoPage.loaded();
        await swaglabsCheckoutTwoPage.finish_button.click()
        await swagLabsCheckoutComplete.goto();
        await swaglabsCheckoutComplete.loaded();
        expect(await element(by.id('checkout_complete_container')).isDisplayed()).toBeTruthy();        
    });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
        await swaglabsInventoryPage.goto();
        await swaglabsInventoryPage.loaded();
        await swaglabsInventoryPage.select.$('[value="hilo"]').click();
        browser.sleep(5000);
        swaglabsLoginPage.url = "https://www.saucedemo.com/inventory.html";
        browser.sleep(5000);
        
    });

    it('sort the inventory items by name, Z-to-A', async () => {
        await swaglabsInventoryPage.goto();
        await swaglabsInventoryPage.loaded();
        var select = element(by.css('select[class="product_sort_container"]'));
        await select.$('[value="za"]').click();
        browser.sleep(5000);
    });


})