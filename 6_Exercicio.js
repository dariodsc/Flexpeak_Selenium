function calcularSalario(salarioInicial, ano) {
  const anoInicial = 2010;
  const percentualInicial = 1.5;
  let percentual = percentualInicial;

  for (let i = anoInicial + 1; i <= ano; i++) {
    percentual *= 2;
    salarioInicial += salarioInicial * (percentual / 100);
  }

  return salarioInicial.toFixed(2); // formata o salário em 2 casas decimais
}

const salarioInicial = 1000;
const ano = 2022;
const salarioAtual = calcularSalario(salarioInicial, ano);

console.log(`O salário atual do funcionário em ${ano} é de R$ ${salarioAtual}.`);

// Ainda vou complementar os comentários desse