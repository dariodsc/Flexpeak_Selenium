const { Builder, By } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://duckduckgo.com");                   
  // faz a execução esperar a página
  
  const campoPesquisa = await driver.findElement({ id: "search_form_input_homepage" })
  const botaoPesquisar = await driver.findElement({ id: "search_button_homepage"})
  await campoPesquisa.sendKeys("Queens of the Stone Age")
  // Aguarda o preenchimento do campo pesquisa
  await botaoPesquisar.click()
  // Clica para realizar a pesquisa

  await driver.quit()
  // Após toda a execução, fecha a pagina

}

example();