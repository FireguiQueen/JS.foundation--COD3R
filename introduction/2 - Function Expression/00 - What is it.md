# Function expression 
- É uma função que entra em uma variável 
- Para invocar/chamar esta função, você irá utilizar o nome da variável

</br>

```js
// Function expression | declaration
const pessoa = function person(){
    console.log('Pablo')
};
pessoa()
```


```js
// Function expression | arrow
const SayHello = name => console.log(`Olá, ${name}`)
```


```js 
// Function expression | anonymous
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
// RESULTADO: NADA, pois foi apenas dito para a função ser executada

//> Neste momento estamos dizendo que a variável "sum" irá GRAVAR uma função               
//> Mas em nenhum momento acima pedimos para ela nos mostrar o resultado do cálculo        
// > Apenas mandamos a função ser executada: "sum()"                                        
//> Para termos o resultado desta função, basta pedir que a função seja escrita no console 
//> Com o "return", o resultado pode ser retornado em qualquer outro lugar, até numa variável por exemplo.
```