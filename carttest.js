const homepage = require("../pages/homepage");
const loginpage = require("../pages/loginpage");
const assert = require("chai").assert

describe('Cart Tests', function () {
    beforeEach(async function () {
        await loginpage.goTo('https://www.saucedemo.com/');
        await loginpage.fillCredentials('standard_user', 'secret_sauce');
        await loginpage.clickLogin();
    });

    it('Add item on cart', async function () {
        await homepage.addCart();
        assert(homepage.verifyVisibleElement, true)
    });

});