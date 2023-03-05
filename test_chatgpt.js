const webdriver = require('selenium-webdriver');
const assert = require('assert');

// Criando o driver para o Google Chrome
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// Acessando o site do Google
driver.get('https://www.google.com');

// Localizando o campo de busca e inserindo o termo "Selenium"
const campoDeBusca = driver.findElement(webdriver.By.name('q'));
campoDeBusca.sendKeys('Selenium');

// Clicando no botão de pesquisa
const botaoPesquisar = driver.findElement(webdriver.By.name('btnK'));
botaoPesquisar.click();

// Verificando se o título da página contém o termo "Selenium"
driver.getTitle().then(function(title) {
  assert(title.includes('Selenium'));
});

// Fechando o navegador
driver.quit();
