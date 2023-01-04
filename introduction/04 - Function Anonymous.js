// Invocando uma função anônima
 
//> Primeira coloque toda sua função entre parênteses
(function(){
    console.log('Esta string apareceu no console por causa de uma função anônima!')
}) (); // Com este parênteses estamos invocando a função

// DETALHES IMPORTANTES
/* 
> Certifique-se de sempre colocar ';' no código anterior da função anônima 
> Sempre invoque a função na mesma linha onde a função é fechada com a chave
*/ 

// INVOCANDO UMA FUNÇÃO ARROW E ANÔNIMA

// 01:
(() => {
    return console.log('Esta é uma maneira de se fazer uma função arrow') 
}) (); // <<--- Com este parênteses estamos invocando a função


// 02:
((cor) => console.log(cor)) ('verde'); // <<--- Com este parênteses estamos invocando a função


// 03:
( oi => {console.log(oi); console.log(oi)}) ('Bom dia');