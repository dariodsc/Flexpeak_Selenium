var LoginPage = require('../pages/loginpage')

// Importa a Classe, contém metodos que executam as ações do usuário

describe('Login Tests', function () {

// Esta linha está iniciando uma nova suíte de testes chamada "Login Tests"

    it('Login Success', function () {
        url = 'https://www.saucedemo.com/';
        LoginPage.goTo(url);
        LoginPage.fillCredentials('standard_user', 'secret_sauce')
        LoginPage.clickLogin();

        // Aqui será carregado o cenário de teste (Teste de Login)
    });

});

// Aqui puxa tudo relacionado ao loginpage, separando os arquivos para maior organização