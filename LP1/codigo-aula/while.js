/*let soma = 0;
let numero = 0;

while (numero !== -1){
  numero = parseInt(prompt("Digite um número: "));
  soma = soma + numero;
  alert("A soma é: " + soma);
}*/


/*let soma = 0;
let numero = -1;

do {
  numero = parseInt(prompt("Digite um número: "));
  soma = soma + numero;
  alert("A soma é: " + soma);
} while (numero !== -1);*/


/*let numero = [1,2];

do {
  numero = parseInt(prompt("Digite um número: "));
  numero.push(numero[i]);
  console.log(numero);
} while (numero>=0);

console.log(numero[numero.length]);*/


const arrayNumero = [];
let numero;
  
do {
  numero = parseInt(prompt("Digite um número: "));
  arrayNumero.push(numero);
} while(numero > 0)
alert("Você digitou: " + arrayNumero.length + "números");

const numerosDigitados = numero.length;