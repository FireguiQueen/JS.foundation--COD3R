// --> Anonymous function
/*
-> É uma função normal, porém ela não recebe um nome. 
-> Muito utilizada quando fazemos uma function expression 
-> Pode ser traduzida como "função anônima"
-> Para fazer uma é bem simples, basta fazer uma function sem nome e colocar ela entre parêntesis
*/
(function(){
    console.log('Olá!')
})


// --> Function expression
/* 
-> É uma função anônima que entra em uma variável 
-> Significa que podemos atribuir uma função a uma variável
-> Para invocar/chamar esta função é igual chamar uma function normal, porém você usa o nome da variável
*/ 
var sum = (function(){
    return 5 + 5 ;
})
sum()
// Resultado: NADA
/*
> Neste momento estamos dizendo que a variável "sum" irá GRAVAR o resultado de 5 + 5
> Mas em nenhum momento acima pedimos para ela nos mostrar esta variável
> Apenas mandamos a função ser executada: "sum()"
> Para termos o resultado desta função, basta pedir que a função seja escrita no console
> console.log(sum())
*/ 
console.log(sum())
// Resultado: 10 

// Em JS uma variável pode assumir qualquer valor, 
// sendo assim você pode fazer outra variável receber a função que está na variável "sum"
var SameSum = sum()
console.log(SameSum) 




var pessoa = (function (name, idade, peso, altura, sexo){
    return` 
    Dados pessoais.:
    Nome: ${name}
    Idade ${idade}
    Peso: ${peso}kg
    Altura: ${altura}cm
    Sexo: ${sexo}
    `
})
console.log(pessoa('Flora', 17, 61, 173, 'fêmea'))