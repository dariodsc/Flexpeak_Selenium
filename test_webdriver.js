const webdriver = require('selenium-webdriver');  //importa a biblioteca seleniumdriver

const driver = new webdriver.Builder()            // criando o driver para o navegador
    .forBrowser('chrome')
    .build();

driver.get('https://www.google.com.br')           // Pede ao driver retornar o endereço