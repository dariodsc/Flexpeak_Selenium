const { Builder } = require("selenium-webdriver");
var driver = new Builder().forBrowser("chrome").build();

class BasePage {

    constructor() {
        global.driver = driver;
        /*  Torna o objeto DRIVER global
        para que possa ser usado em outros testes */
    }

    goTo(url) {
        driver.get(url);
        driver.sleep(5000);
        /*Este método goTo navega para uma URL passada como parâmetro
        usando o método get do objeto driver. 
        Em seguida, espera por 5 se gundos usando o método sleep do objeto driver.*/
    }

    enterText(locator, info) {
        driver.findElement(locator).sendKeys(info);
        driver.sleep(5000);
    }

    mouseClick(locator) {
        driver.findElement(locator).click();
        driver.sleep(5000);
    }

}
module.exports = BasePage;