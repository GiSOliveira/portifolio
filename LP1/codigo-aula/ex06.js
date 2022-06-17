function nomeIdade(nome,idade){
  if (idade>=18){
    return (`${nome}, é maior de idade e tem ${idade} anos.`)
} else{
  return  (`${nome}, é menor de idade e tem ${idade} anos.`)
}
}

console.log(nomeIdade('Gisele',31));
console.log(nomeIdade('Thiago',33));
console.log(nomeIdade('Jandira',55));
console.log(nomeIdade('Henrique',10));