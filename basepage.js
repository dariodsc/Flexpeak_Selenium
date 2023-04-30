const { Builder } = require("selenium-webdriver");          // importa o selenium webdriver
var driver = new Builder().forBrowser("chrome").build();    // objeto para controlar o navegador (Chrome)
driver.manage().setTimeouts({ implicit: (10000) });
class BasePage {                                            // Contém metodos que serão usados para interagir com a página

    constructor() {
        global.driver = driver;
    }

    async goTo(url) {                                       // navega para URL especificada
        await driver.get(url);
    }

    async enterText(locator, info) {                        // insere o texto no campo referenciado por LOCATOR
        await driver.findElement(locator).sendKeys(info);
    }

    async mouseClick(locator) {                             // Clica no elemento referenciado pelo LOCATOR
        await driver.findElement(locator).click();
    }

    async getElementText(locator) {                         // Retorna o texto referenciado pelo LOCATOR
        await driver.findElement(locator).getText()
    }

    async elementIsVisible(locator) {                       // Retorna 'true' se o elemento referenciado pelo LOCATOR estiver vísivel na página, senão FALSE
        return await driver.findElement(locator).isDisplayed()
    }

    async closeWindow() {                                   // Fecha o navegador
        await driver.quit()
    }

}
module.exports = BasePage;                                  // Exporta o modulo para que possa ser usado em outros módulos Node.js