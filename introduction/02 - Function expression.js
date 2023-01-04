// --> Anonymous function
(function(){
    console.log('Olá!')
})      
/*
-> Pode ser traduzida como "função anônima"
-> É uma função normal, porém ela não recebe um nome. 
-> Muito utilizada quando fazemos uma function expression 
*/


// --> Function expression
/* 
-> É uma função anônima que entra em uma variável 
-> Significa que podemos atribuir uma função a uma variável
-> Para invocar/chamar esta função é igual chamar uma function normal, porém você usa o nome da variável
-> Não tente chamar a função pelo seu nome, e sim pelo nome da variável está recebendo ela
*/ 
var sum = (function(){
    return 5 + 5 ;
})
sum()
// Resultado: NADA
/*
> Neste momento estamos dizendo que a variável "sum" irá GRAVAR o resultado de 5 + 5
> Mas em nenhum momento acima pedimos para ela nos mostrar o resultado do cálculo
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




// Exercício 01 - Cartão de identidade
var pessoa = (function(name, idade, peso, altura, sexo) {
    return` 
    Dados pessoais.:
    Nome: ${name}
    Idade ${idade}
    Peso: ${peso}kg
    Altura: ${altura}cm
    Sexo: ${sexo} 
    `
})
console.log(pessoa('Flora', 17, 61, 173, 'feminino'))




const name = function(nome){
    console.log('Quantidade de letras: ' + nome.replaceAll(' ', '').length)
}
name('Guilherme');



const omg = oi => console.log(oi)
omg('o')