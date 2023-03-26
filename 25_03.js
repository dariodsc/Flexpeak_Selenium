const { Builder, By } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.saucedemo.com/");                   
  
  /* Atualização do codigo de automação. Nesse, será aprimorado reduzindo o número de linhas */

  // tela de login
  const CampoLogin = await driver.findElement({id: "user-name"}).sendKeys("standard_user")
  const CampoSenha = await driver.findElement({id: "password"}).sendKeys("secret_sauce")
  const botaoLogin = await driver.findElement({id: "login-button"}).click()
  /* Criada uma variavel que guarda o elemento encontrado no DOM (findElement), 
  em seguida é executado o comando (sendKeys) que envia o comando para a aplicação (linhas 1 e 2)
  A linha 3 segue a mesma lógica, mas envia comando para clicar em um botão (click)*/
  
  // tela de produtos
  const botaoProduto1 = await driver.findElement({id: "add-to-cart-sauce-labs-backpack"}).click()
  const botaoProduto2 = await driver.findElement({id: "add-to-cart-sauce-labs-bike-light"}).click()
  
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
  
  //Aguardar
  await driver.sleep(5000)
  await driver.quit()
  /*Aguardar 5 segundos e fecha o navegador*/
}

example();