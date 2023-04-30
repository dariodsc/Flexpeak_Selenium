var LoginPage = require('../pages/loginpage')
var HomePage = require('../pages/homepage')
const assert = require("chai").assert

describe('Login Tests', function () {

    beforeEach(async function () {
        url = 'https://www.saucedemo.com/';
        await LoginPage.goTo(url);
    });

    after(async function () {
        await LoginPage.closeWindow();
    });

    it('Login Success', async function () {
        await LoginPage.fillCredentials('standard_user', 'secret_sauce')
        await LoginPage.clickLogin();
        assert(HomePage.verifyText, 'Products')

    });

    it('Password empty', async function () {
        await LoginPage.fillCredentials('standard_user', '');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Epic sadface: Password is required')
    });

    it('Username empty', async function () {
        await LoginPage.fillCredentials('', 'secret_sauce');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Epic sadface: Username is required')
    });

    it('Wrong password', async function () {
        await LoginPage.fillCredentials('standart_user', '123456');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Wrong username', async function () {
        await LoginPage.fillCredentials('melao', 'secret_sauce');
        await LoginPage.clickLogin();
        assert(LoginPage.verifyErrorMessage(), 'Epic sadface: Username and password do not match any user in this service')
    });

});