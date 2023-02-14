// Invocando uma função anônima
 

/*  DETALHES IMPORTANTES
> Certifique-se de sempre colocar ';' no código anterior da função anônima 
> Sempre invoque a função na mesma linha onde a função é fechada com as chaves
*/ 

//> Primeira coloque toda sua função entre parênteses
(function(){
    console.log('Esta string apareceu no console por causa de uma função anônima!')
}) (); // Com este parênteses estamos invocando a função

(function(nome){
    console.log(`Olá, ${nome}!`)
}) ('Paulo');





//                          INVOCANDO UMA FUNÇÃO ARROW E ANÔNIMA

// EXEMPLO 01: (se não for passar nenhum parâmetro os parentesis são obrigatórios)
(() => {
    return console.log('Esta é uma maneira de se fazer uma função arrow') 
}) (); // <<--- Com este parênteses estamos invocando a função


// EXEMPLO 02: (não precisa colocar parentesis se houver apenas um parâmetro para a função)
(cor => console.log(cor)) 
('verde'); // <<--- Com este parênteses estamos invocando a função


// EXEMPLO 03:
( oi => {console.log(oi); console.log(oi)}) ('Bom dia');
        // As chaves são necessárias pois a função nos retorna mais de um valor 





        

//                                          Function declaration        

function pessoa(nome){
    console.log(`Olá, ${nome}!`)
}
pessoa('Otavio');





//                                          Function expression  
var pessoa = function(nome){
    console.log(`Olá, ${nome}`)
}
pessoa('Flora')



//                                      Function expression + arrow 

// Como há somente um parâmetro, parentesis não são obrigatórios
// Como há somente um valor sendo retornado, chaves não são necessárias
var pessoa = nome => console.log(`Olá, ${nome}`) 
pessoa('Duds');
