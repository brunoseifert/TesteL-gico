//5) Escreva um programa que inverta os caracteres de um string.

///IMPORTANTE:

//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

//b) Evite usar funções prontas, como, por exemplo, reverse;

function inverteString(s) {
  let resultado = "";

  for (let i = s.length - 1; i >= 0; i--) {
    resultado += s[i];
  }

  return resultado;
}

// stringTeste pode ser alterada para qualquer texto
const stringTeste = "Bruno Seifert";
const resultadoInversao = inverteString(stringTeste);
console.log(resultadoInversao);

// para ver o resultado basta rodar o código com o comando no terminal "node 05"
