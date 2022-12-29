// Function declaration

/* 
O que são functions? 
-> É um bloco de código que executa tarefas ou calcula valores
-> Uma function é como se fosse um pequeno programa dentro do seu programa
-> Ela é responsável por 
*/ 

/* 
O que são palavras reservadas?
-> são o que formam uma linguagem, cada palavra reservada tem seu propósito e faz alguma coisa 
-> são conhecidas como "palavras chaves" ou "keywords" 
-> são palavras que não possuem outro propósito além do que foi definido pela linguagem
-> são parte da sintaxe da linguagem, e todas são escritas em mínusculo 

Exemplos de palavras reservadas: 
function
var 
const
return
if 
else
console.log..
*/

/*
Como criar uma function?
-> Primeiro você coloca a palavra reservada do Javascript  chamada "function"
-> Após colocar "function" você irá colocar o nome desta função e colocar chaves duplas
-> Tudo dentro da chave é o que a função irá executar
*/ 


function Greeting(function_number){ 
    console.log(`Função ${function_number} - Olá!`)
    console.log('--------------------------------------------------')

}
Greeting('01')




function SayHiTo(function_number, name){
    console.log(`Função ${function_number} - Olá, ${name}!`)
    console.log('--------------------------------------------------')

}
SayHiTo('02','Fabio')




function GreetingTo(function_number){
    return `Função ${function_number} - Olá, a keyword "return" retorna uma string. Este string pode ser armazenada em variáveis ou colocada no HTML`
}
console.log(GreetingTo('03'))


 
// --> Diferença entre console.log e return 

//> Quando criamos uma function sem a função "return", tudo dentro colocado dentro desta function não será salvo nela
//> Uma function sem "return" ira fazer tudo o que foi pedido, porém ela não irá salvar o código na função 

// Exemplo:
function palavra(){
    console.log('oi') 
}
palavra() 
// RESULTADO NO CONSOLE: "oi".       (se colocar.: console.log(palavra())" o valor será "undefined")

/*
Por que no console será "undefined" se eu tentar chamar a function utilizando uma função? 

> Pelo fato de não haver "return" nesta function, assim que ele for chamada todo o código dentro dela será executado.
> Assim que você chamou a function usando "palavra()", ela colocou "oi" no console, pois é isto que você pediu para ela fazer. 

> É por isso que "console.log(palavra()) o resultado é "undefined", uma function sem return apenas roda o bloco de código colocado
  E não o grava.



---> UMA FUNCTION SEM "RETURN", COMO FUNCIONA?

ANALOGIA 01: 
    >Você possui um rôbo 
    >Este rôbo é programado para dar comida ao seu cão quando você dizer a palavra "cachorro"

    Se você perguntar ao seu rôbo o que a palavra "cachorro" faz, ele não vai saber responder você
    Mas ele irá saber o que deve FAZER quando você dizer "cachorro"
    Isto ocorre pois ele executa um bloco de códigos após a palavra "cachorro" ser dita
    Mas ele não sabe que este bloco de código é referente a palavra "cachorro"
    A única coisa que este rôbo sabe é que após a palavra cachorro ser dita, ele deve executar um bloco de códigos
    E neste bloco de códigos foi desenvolvido para ele ser mexer, pegar a comida e entre outras coisas


ANALOGIA 02: 
    >Você possui um computador
    >Para ligar este computador, obviamente você precisa apartar o botão do gabinete

    Perceba que, não é o botão que liga o seu computador
    O botão é apenas algo físico que fará seu computador rodar linhas de código para inicializar seu sistema 
    Se você perguntar ao seu computador o que o botão dele faz, ele não vai saber responder
    Se você perguntar ao botão o que ele faz, ele só vai saber que ele serve para rodar linhas de código
    Estas linhas de código só são rodadas caso o botão seja pressionado 

    Em resumo: O botão não sabe o que ele faz, ele só sabe que deve executar um bloco de códigos específico

    ! É por isso que se tentarmos colocar:
    var botão = BotaoDeLigar()
   
    
*/

