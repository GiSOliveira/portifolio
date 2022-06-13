/*const aluna = { nome: "Gisele", cargo: "Consultora de Tecnologias para Marketing", empresa: "Match", instrumento: "órgão" };
console.log(`Meu nome é ${aluna.nome}, trabalho como ${aluna.cargo} na ${aluna.empresa} e como hobbie toco ${aluna.instrumento}`);*/




/*for(let i=0; i <= 10; i++) {
  console.log(`i = ${i}`);
}*/

/*for(let i=1000; i >= 1; i--) {
  console.log(`i = ${i}`);
}*/


/*const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10, 3, 4, 6, 2, 5, 6, 3];

//console.log(notas[0]);
//console.log(notas[1]);
//console.log(notas[2]);
//console.log(notas[3]);
//console.log(notas[4]);
//console.log(notas[5]);

  //for (let i=0; i< notas.length; i++){
    //console.log(notas[i]);
 // }

  //notas.length

for(const nota of notas){
    console.log(nota);
}*/

const refeicoes = {manha: "café com pão", tarde: "macarronada", noite: "PIZZA" }

  console.log(refeicoes.manha);
  console.log(refeicoes.tarde);
  console.log(refeicoes.noite);

for(const chave in refeicoes){
    console.log(refeicoes[chave]);
}