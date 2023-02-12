/* 
    Uma arrow function é sempre anônima, pois NÃO conseguimos dar um nome para ela
    Uma arrow function é uma sintaxe mais curta para escrever funções anônimas em JavaScript.
*/

// Função arrow
let carteira2 = (valor, cor) => {
    return `
    Carteria 2:
    Valor duplicado: ${valor *2}  ||  Cor da carteira: ${cor.toUpperCase()}`
}
console.log(carteira2(5, 'verde'));
// RESULTADO NO CONSOLE: 'Valor duplicado: 10  ||  Cor da carteira: VERDE'




// Datalhes importantes
/*
    > Quase sempre usada com uma function expression
    > Pode ser simplificada
*/



// SIMPLIFICANDO 1:
// Caso você possua somente UM parâmetro, você pode simplificar a arrow function tirando os "()":
let carteira3 = cor =>{ 
    return `
    Carteira 3:
    Cor: ${cor}`
}
console.log(carteira3('Amarela'))




// SIMPLIFICANDO 2:
// CASO VOCÊ QUEIRA RETONRAR APENAS UM VALOR, AS CHAVES "{}" NÃO SÃO NECESSÁRIAS
let carteira4 = cor => cor 
console.log(carteira4('verde'))

let carteira5 = (cor, valor) => `Cor: ${cor}    ||   Saldo: ${valor}`
console.log(carteira5('verde', 5));



// CASO VOCÊ QUEIRA RETONAR DOIS CONSOLES.LOG POR EXEMPLO, AS CHAVES SERÃO NECESSÁRIAS
let carteira6 = (saldo, cor) => {
    console.log(`Saldo: R$${saldo}`); 
    console.log(`Cor: ${cor}`);}
carteira6(52535, 'verde');





