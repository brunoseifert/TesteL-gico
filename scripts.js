function isFibonacciNumber(number) {
  if (number < 0) {
    return false;
  }

  let a = 0;
  let b = 1;

  while (b < number) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === number;
}

function verificarNumero() {
  const numeroDoFormulario = document.getElementById("numero").value;
  const mensagemResultado = document.getElementById("mensagemResultado");
  const numero = Number(numeroDoFormulario);

  if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
  } else {
    if (isFibonacciNumber(numero)) {
      mensagemResultado.textContent = `${numero} é um número de Fibonacci!`;
    } else {
      mensagemResultado.textContent = `${numero} não é um número de Fibonacci.`;
    }
  }
}

function inverterNome() {
  const nomeDoFormulario = document.getElementById("username").value;
  const mensagemResultadoNome = document.getElementById(
    "mensagemResultadoNome"
  );

  if (nomeDoFormulario.trim() === "") {
    mensagemResultadoNome.textContent = "Por favor, insira um nome válido.";
  } else {
    let nomeInvertido = "";
    for (let i = nomeDoFormulario.length - 1; i >= 0; i--) {
      nomeInvertido += nomeDoFormulario[i];
    }
    mensagemResultadoNome.textContent = `Seu nome ao contrário: ${nomeInvertido}`;
  }
}
