# Function declaration
 
## Criando uma function declaration
- Utilize da palavra reservada "function" e de um nome para a função
- Ao lado do nome, coloque parêntesis, eles são obrigatórios para este tipo de function
- Dentro do parêntesis haverá parâmetros opcionais que se comportam como variáveis dentro da função. Os parâmetros dizem à função o que fazer com os argumentos que ela forneceu ().
- Após os parêntesis, coloque chaves, tudo dentro das chaves é chamado de "corpo da função", ou seja, o bloco de código que será executado quando a função for chamada.

  >A maioria das declarações de função inclui uma instrução "return". Uma instrução "return" diz à função que ela deve enviar um valor de volta para onde a função foi chamada.
```js
function PartesDoDia(){         // Abrimento & Nome da função
    console.log('Bom dia!');    // Corpo da função 
    console.log('Boa tarde!');  // Corpo da função
    console.log('Boa noite!');  // Corpo da função
}                               // Fechamento da função
PartesDoDia()                   // Invocando a função 
```

</br>

_________________________________________________________________

## O que são palavras reservadas?
<ul type=square>
<li>é o que forma uma linguagem, cada palavra reservada tem seu propósito e faz alguma coisa</li>
<li>são conhecidas como "palavras chaves" ou "keywords" </li>
<li>são palavras que não possuem outro propósito além do que foi definido pela linguagem</li>
<li>são parte da sintaxe da linguagem, e todas são escritas em mínusculo </li>

### Exemplos de palavras reservadas: 
> function      </br>
> var           </br>
> const         </br>
> return        </br>
> if            </br>
> else          </br>
> console.log   </br>
</ul>

_________________________________________________________________

## O que são parâmetros e argumentos? 
Os parâmetros são muito parecidos com variáveis, e através deles podemos dar dinamismo a uma function. O parâmetro é colocado dentro dos parêntesis de uma função. 

Enquanto os argumentos são os "valores" deste parâmetro, é como se o parâmetro fosse o identificador de uma variável, e o argumento sendo o valor desta variável. 

</br>

### Veja o exemplo abaixo.: 

```js
funtion pessoa(nome){  // "nome" é o parâmetro
    console.log(nome);
}
pessoa('Guilherme');   // Argumento é o que irá ir para o valor do parâmetro

// Resultaldo no console: Guilherme
```

O parâmetro desta function se chama "nome". Para darmos um valor a este parâmetro, basta
passar um argumento quando invocarmos uma função.

