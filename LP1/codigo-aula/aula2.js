//CONDICIONAL SIMPLES:

//let estadoNascimento = 'Pernambuco';
// ou usar:  let estadoNascimento = prompt("Qual estado vc naceu?");

//if(estadoNascimento === 'Pernambuco') {
 // console.log("É uma pessoa pernambucana!");
//}

// CONDICIONAL COMPOSTA:  

//let estadoNascimento = 'São Paulo';
// ou usar:  let estadoNascimento = prompt("Qual estado vc naceu?");

//if(estadoNascimento === 'Pernambuco') {
  //console.log("É uma pessoa pernambucana!");
//} else {
   // console.log("Não é uma pessoa pernambucana.");
//}

// CONDICIONAL ANINHADA:  let estadoNascimento:

//const numero = -15;

//if (numero < 10) {
  //console.log("Esse número é menor que 10");
//} else if (numero ===10) {
  //console.log("Esse número é igual a 10");
//} else  {
  //console.log("Esse número é maior que 10");
//}

//if (numero < 0) {
//  console.log("Esse número é menor que zero");
//} else {
  //console.log("Esse número é maior que zero");
//} 

//const numero1 = 90;
//const numero2 = 60;
//const soma = numero1 + numero2;
//console.log(`A soma é ${soma}`);

//if (soma > 100) {
 // console.log("O resultado é maior que 100");
//} else if(soma===100) {
  //console.log("Bingo! O resultado é 100");
//} else {
 // console.log("O resultado é menor que 100");
//}

const idade = 7;

if (idade >= 5 && idade <= 7){
  console.log("Infantil A");
} else if (idade >= 8 && idade <= 11) {
  console.log("Infantil B");
} else if (idade >= 12 && idade <= 13) {
  console.log("Juvenil A");
} else if (idade >= 14 && idade <= 17) {
  console.log("Juvenil B");
} else if (idade >= 18) {
  console.log("Adulto");
} else {
    console.log("Você ainda não tem idade para competir!");
}
