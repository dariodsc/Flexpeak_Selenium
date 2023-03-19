const { Builder, By } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.saucedemo.com/");                   
  
  // tela de login
  const CampoLogin = await driver.findElement({id: "user-name"})//.sendKeys("standard_user")
  const CampoSenha = await driver.findElement({id: "password"})//.sendKeys("secret_sauce")
  const botaoLogin = await driver.findElement({id: "login-button"})//.click()
  await CampoLogin.sendKeys("standard_user")   // comando que envia login
  await CampoSenha.sendKeys("secret_sauce")   // comando que envia a senha
  await botaoLogin.click()    // comando feito separado - clicar no login

  // tela de produtos
  const botaoProduto1 = await driver.findElement({id: "add-to-cart-sauce-labs-backpack"})
  await botaoProduto1.click()

  const botaoProduto2 = await driver.findElement({id: "add-to-cart-sauce-labs-bike-light"})
  await botaoProduto2.click()

  // carrinho de compras
  const carrinho = await driver.findElement({className: "shopping_cart_link"})
  await carrinho.click()

  //checkout
  const checkout = await driver.findElement({id: "checkout"})
  await checkout.click()

  //Aguardar
  await driver.sleep(7000)
  await driver.quit()
}

example();
