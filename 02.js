function verificaFibonacci(numero) {
  let a = 0,
    b = 1;

  while (b <= numero) {
    if (b === numero) {
      return `${numero} pertence à sequência de Fibonacci.`;
    }
    const temp = a + b;
    a = b;
    b = temp;
  }

  return `${numero} não pertence à sequência de Fibonacci.`;
}

// Teste com um número específico (pode ser alterado)
const numeroTeste = 12;
const resultado = verificaFibonacci(numeroTeste);
console.log(resultado);
