
const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

for (let i=0; i< notas.length; i++){
  console.log(notas[i]);
}

for(let i=0; i< notas.length; i++){
    if(notas[i] < 1){
        console.log(` A nota ${notas[i]} é menor que 1`);
    }
}

for (let i = 0; i < notas.length; i++) {
    if (notas[i]===10) {
        notas.push(9.0);
        console.log(notas);
    }
}


for (let i = 0; i <notas.length; i++) {
    if (notas[i] === 6.3) {
        notas.pop();
        console.log(notas);
    }
}
