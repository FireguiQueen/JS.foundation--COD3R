// Definindo um valor padrão do parâmetro caso não haja argumentos
/* 
    No exemplo abaixo, caso você não defina um argumento para o parâmetro "idade" por exemplo,
    o console irá retornar "idade não informada"
*/
function pessoa(nome = 'não informado', idade = 'não informada'){
    console.log(`Nome: ${nome}, Idade: ${idade}`)
} 
pessoa('paulo');





/*
    O QUE ACONTECE SE COLOCAR MAIS ARGUMENTOS DO QUE PARÂMETROS:
    Não irá retornar nenhum erro, e o JS irá ignorar esses argumentos extras que foram dados 
*/

function carro(nome, cor){
    return `
    Nome: ${nome}
    Cor: ${cor}
    `
}
console.log(carro('Tesla X', 'Vermelho', '44km rodados')) // Não há parâmetro para o último arg






/*
    O QUE ACONTECE SE COLOCAR MENOS ARGUMENTOS DO QUE PARÂMETROS:
    Não irá retornar nenhum erro, e o JS irá dar "undefined" aos parâmetros que não foram definidos 
*/
function 



