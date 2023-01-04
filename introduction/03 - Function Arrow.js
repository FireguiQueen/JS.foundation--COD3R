// Function expression
let carteira = function(valor){
    return valor + 1 
}
console.log(carteira(7))
// Resultado no console: 8




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
> Uma função arrow é SEMPRE uma função anônima
> Sempre chame uma função arrow usando a letiável que recebe ela
> Pode ser simplificada
*/

// SIMPLIFICANDO 1:
// Caso você possua somente UM parâmetro, você pode simplificar a arrow function tirando os "()":
let carteira3 = cor =>{ // Perceba que não existe mais os partênteses, mas isto só pode ser feito quando há um parâmetro para a function
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
let carteira6 = (saldo, cor) => {console.log(`Saldo: R$${saldo}`); console.log(`Cor: ${cor}`);}
carteira6(52535, 'verde');

// Invés de usar ";" no primeiro console.log, você também poderia criar outra linha
let carteira7 = (saldo, cor) => {
    console.log(`Saldo: R$${saldo}`)
    console.log(`Cor: ${cor}`);
} 
carteira7(43433, 'vermelha');



