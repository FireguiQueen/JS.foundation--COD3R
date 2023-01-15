# Function expression 
- É uma função que entra em uma variável 
- Significa que podemos atribuir uma função a uma variável
- Para invocar/chamar esta função é igual chamar uma function normal, porém você usa o nome da variável
- Não tente chamar a função pelo seu nome, e sim pelo nome da variável está recebendo ela

```js 
var sum = (function(){
    return 5 + 5 ;
})
console.log(sum());
// RESULTADO: 10
```

```js 
var sum = (function(){
    return 5 + 5 ;
})
sum();
// RESULTADO: NADA, pois foi apenas dito para a função retornar quanto é 5 + 5
// Mas não foi dito onde este resultado deve ser retornado

//> Neste momento estamos dizendo que a variável "sum" irá GRAVAR uma função               
//> Mas em nenhum momento acima pedimos para ela nos mostrar o resultado do cálculo        
//> Apenas mandamos a função ser executada: "sum()"                                        
//> Para termos o resultado desta função, basta pedir que a função seja escrita no console ou em outro lugar. 
//> Com o "return", o resultado pode ser retornado em qualquer outro lugar, até numa variável por exemplo.
```