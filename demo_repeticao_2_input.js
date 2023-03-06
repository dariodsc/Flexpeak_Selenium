function imprimirNumerosParesEntre(num1, num2) {
  let menor = num1 < num2 ? num1 : num2;          // Operador ternário - se num1 menor que num2 (True - ?) num2 (False - :)
  let maior = num1 > num2 ? num1 : num2;

  while (menor <= maior) {
    if (menor % 2 === 0) {
      console.log(menor);
    }
    menor++;
  }
}

imprimirNumerosParesEntre(2, 10)
