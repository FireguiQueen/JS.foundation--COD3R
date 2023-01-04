# Diferença entre console.log e return 
Quando criamos uma function sem a função "return", tudo colocado dentro desta function não será salvo nela
Sem o "return" a function irá fazer tudo o que foi pedido, porém ela não irá salvar o código na função 

```js
function palavra(){
    console.log('oi') 
}
palavra() 
```
> RESULTADO NO CONSOLE: "oi"  
     
Se colocarmos: 'console.log(palavra())' para chamar a função, o valor será "undefined"


## Por que no console será "undefined" se eu tentar chamar a function utilizando o console.log? 

Pelo fato de não haver "return" nesta function, assim que ele for chamada todo o código dentro dela será executado.
Assim que você chamou a function usando "palavra()", ela colocou "oi" no console, pois é isto que você pediu para ela fazer. 

> É por isso que "console.log(palavra()) o resultado é "undefined", uma function sem return apenas roda o bloco de código colocado e não retornada NADA.

___________________________________________________________________________

## UMA FUNCTION SEM "RETURN", COMO FUNCIONA?
### ANALOGIA 01 
    Você possui um rôbo.
    Este rôbo é programado para dar comida ao seu cão quando você dizer a palavra "cachorro"..
    Se você perguntar ao seu rôbo o que a palavra "cachorro" faz, ele não vai saber responder você
    Mas ele irá saber o que DEVE FAZER quando você dizer "cachorro"
    Isto ocorre pois ele executa um bloco de códigos após a palavra "cachorro" ser dita
    Mas ele não sabe que este bloco de código faz e que é referente a palavra "cachorro"
    
    A única coisa que este rôbo sabe é que após a palavra cachorro ser dita, ele deve executar um bloco de códigos, 
    e neste bloco de códigos é dito para ele ser mexer, 
    pegar a comida e entre outras coisas para a comida chegar até o cachorro.

### ANALOGIA 02 
    Você possui um computador
    Para ligar este computador, obviamente você precisa apartar o botão do gabinete
    Perceba que, não é o botão que liga o seu computador, o botão é apenas algo físico que fará seu computador rodar linhas de código para inicializar seu sistema 
    Se você perguntar ao seu computador o que o botão dele faz, ele não vai saber responder
    Se você perguntar ao botão o que ele faz, ele só vai saber que ele serve para rodar linhas de código
    Estas linhas de código só são rodadas caso o botão seja pressionado 

    Em resumo: O botão não sabe o que ele faz, ele só sabe que deve executar um bloco de códigos específico

    > É por isso que se tentarmos colocar:
    var botão = BotaoDeLigar()  
    não irá retornar nada, pois o botão não tem ideia do que faz, 
    ele só serve para dar inicio a uma leitura de um bloco de códigos (também conhecido como corpo da função)





