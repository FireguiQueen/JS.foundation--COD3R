# Function expression 
- É uma função anônima que entra em uma variável 
- Significa que podemos atribuir uma função a uma variável
- Para invocar/chamar esta função é igual chamar uma function normal, porém você usa o nome da variável
- Não tente chamar a função pelo seu nome, e sim pelo nome da variável está recebendo ela

````js 
var sum = (function(){
    return 5 + 5 ;
})
sum()
// Resultado: NADA
```

> Neste momento estamos dizendo que a variável "sum" irá GRAVAR o resultado de 5 + 5
> Mas em nenhum momento acima pedimos para ela nos mostrar o resultado do cálculo
> Apenas mandamos a função ser executada: "sum()"
> Para termos o resultado desta função, basta pedir que a função seja escrita no console
> console.log(sum())
*/ 
console.log(sum())
// Resultado: 10 