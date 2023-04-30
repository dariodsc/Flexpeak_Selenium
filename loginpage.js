var BasePage = require('./basepage')
const { By } = require('selenium-webdriver')

class LoginPage extends BasePage {
    fieldLogin = By.id('user-name')
    fieldPassword = By.id('password')
    loginButton = By.id('login-button')
    errorElement = By.xpath('/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3')

    async fillCredentials(login, password) {
        await this.enterText(this.fieldLogin, login)
        await this.enterText(this.fieldPassword, password)
    }

    async clickLogin() {
        await this.mouseClick(this.loginButton)
    }

    async verifyErrorMessage() {
        let errorMessage;
        errorMessage = await this.getElementText(errorElement);
        return errorMessage;
    }
}
module.exports = new LoginPage();