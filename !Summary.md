# Requisitos

<ol>
<h3> <li>Saber coisas básicas como.:</li> </h3>

- Date ypes: number, string, boolean, array & object 
- Operators: +,&nbsp;-,&nbsp;  *,&nbsp;  /,&nbsp;  ||,&nbsp;  >=,&nbsp;  <=..
- If, For, While  

</br>


<h3> <li>Ter o Node.js no pc (opcional/recomendado) </li> </h3>

>Você pode o instalar <a href="https://nodejs.org/en/">aqui</a>

</br>

<h3> <li> Usar a extensão "coder runner" (opcional/recomendado) </li> </h3>

>To run the code: _Ctrl + Alt + n_ </br>
>To stop running the code: _Ctrl + Alt + m_


______________________________________________________________________ 

</br>

# O que são functions? 
- Uma function é como se fosse um pequeno programa. Um sub-programa dentro do seu programa
- Uma function executa um bloco de código, que pode fazer tarefas, calcular valores e retornar valores
- É composta por uma sequência de instruções chamada corpo da função

</br>

## O que são palavras reservadas?
- São o que formam uma linguagem, cada palavra reservada tem seu propósito e faz alguma coisa </br>
- São conhecidas como "palavras chaves" ou "keywords" </br>
- São palavras que não possuem outro propósito além do que foi definido pela linguagem</br>
- São parte da sintaxe da linguagem, e todas são escritas em mínusculo 

</br>

 > Exemplos de palavras reservadas: </br>
 > function, var, const, return, if, else, console, new..

 </br>

## Função anônima
- É uma função normal, porém não recebe nome 
- Pode ser atribuida a uma variável, e para invocá-la utiliza-se do nome da variável
- Pode ser invocada sem uma variável, mas será necessário utilizar dos parênteses
- Caso o código acima da função anônima não possuir ";" , você terá erros 

#### Invocando uma função anônima
```js 
// O primeiro parêntesis da linha abaixo será necessário para invocar a função anônima
(function(){ 
    console.log('Olá')
}) (); // Este parêntesis a esquerda está invocando a função.
```

```js
// Caso você possua outra linha de código acima de sua função totalmente anônima, será obrigatório colocar o ponto e vírgula (;)

console.log('Olá'); // Este ponto e vírgula é OBRIGATÓRIO caso deseja que a função abaixo funcione

(function(){
    return `
    Frase do dia.:
    A escola é o total oposto dos processos de seu gerenciador de tarefas, pois eles são úteis e necessários. `   
});
```





 
