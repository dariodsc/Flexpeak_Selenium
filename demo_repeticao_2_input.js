function imprimirNumerosParesEntre(num1, num2) {
  let menor = num1 < num2 ? num1 : num2;
  let maior = num1 > num2 ? num1 : num2;

  while (menor <= maior) {
    if (menor % 2 === 0) {
      console.log(menor);
    }
    menor++;
  }
}

imprimirNumerosParesEntre(2, 10)