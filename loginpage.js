var BasePage = require('./basepage')
const { By } = require('selenium-webdriver')

class LoginPage extends BasePage {
    fieldLogin = By.id('user-name')
    fieldPassword = By.id('password')
    loginButton = By.id('login-button')

    fillCredentials(login, password) {
        this.enterText(this.fieldLogin, login)
        this.enterText(this.fieldPassword, password)
    }

    clickLogin() {
        this.mouseClick(this.loginButton)
    }
}
module.exports = new LoginPage();