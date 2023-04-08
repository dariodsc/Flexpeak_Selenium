const { Builder, By } = require("selenium-webdriver");
const assert = require("chai").assert

describe('Login Tests', async function () {

    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.saucedemo.com/");
    /*É executado antes de cada caso de teste, criando uma nova instância do Selenium Webdriver*/
    });

    afterEach(async function () {
        await driver.quit()
    /*É executado após cada caso de teste e fecha o navegador*/
    });

    it('Login realizado com sucesso', async function () {
        const campoLogin = await driver.findElement(By.id("user-name")).sendKeys('standard_user')
        const campoPassword = await driver.findElement(By.id("password")).sendKeys('secret_sauce')
        const botaoLogin = await driver.findElement(By.id("login-button")).click()

        const title = await driver.findElement(By.className('title')).getText()
        assert.equal('Products', title)
    });

    
    it('Login de um usuário com problemas', async function () {
        const campoLogin = await driver.findElement(By.id("user-name"))
        const campoPassword = await driver.findElement(By.id("password"))
        const botaoLogin = await driver.findElement(By.id("login-button"))

        await campoLogin.sendKeys('problem_user')
        await campoPassword.sendKeys('secret_sauce')
        await botaoLogin.click()

        const title = await driver.findElement(By.className('title')).getText()
        assert.equal('Products', title)
    });
    

    it('Carrinho Vazio Checkout', async function () {
        //login
        const campoLogin = await driver.findElement(By.id("user-name")).sendKeys('standard_user')
        const campoPassword = await driver.findElement(By.id("password")).sendKeys('secret_sauce')
        const botaoLogin = await driver.findElement(By.id("login-button")).click()

        // tela - carrinho de compras
        const carrinho = await driver.findElement({className: "shopping_cart_link"}).click()
  
        // tela - checkout
        const checkout = await driver.findElement({id: "checkout"}).click()
  
        // tela - dados Cliente Checkout
        const PrimeiroNome = await driver.findElement({id: "first-name"}).sendKeys("Teste")
        const MeioNome = await driver.findElement({id: "last-name"}).sendKeys("Da Silva")
        const CampoCEP = await driver.findElement({id: "postal-code"}).sendKeys("69000051")
        const BotaoContinue = await driver.findElement({id: "continue"}).click()
  
        // tela checkout overview
        const BotaoFinal = await driver.findElement({id: "finish"}).click()
    });



});