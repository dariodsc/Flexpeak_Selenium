const { By } = require("selenium-webdriver");                         // Os seletores de elementos web são definidos por BY, importados pelo Selenium WD
const BasePage = require("./basepage");                               // Importa o basepage já criado

class HomePage extends BasePage {
    titlePage = By.className('title');
    products = By.className('inventory_list');
    cart = By.xpath('/html/body/div/div/div/div[1]/div[1]/div[3]/a');
    filter = By.className('product_sort_container');

    addBag = By.id('add-to-cart-sauce-labs-backpack')
    popupCart = By.className('shopping_cart_link')

    async verifyText() {
        let text;
        text = await this.getElementText(titlePage);
        return text
    }

    async verifyVisibleElement() {
        return await this.elementIsVisible(this.popupCart);
    }

    async addCart() {
        await this.mouseClick(this.addBag)
    }

    async removeCart() {

    }

    async filterByPrice() {

    }
}
module.exports = new HomePage();        // Exporta o modulo para ser usado em outros modulos Noje.JS