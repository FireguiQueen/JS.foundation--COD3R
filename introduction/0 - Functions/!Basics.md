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

</br>

_________________________________________________________________

## O que são parâmetros e argumentos? 
Os parâmetros são muito parecidos com variáveis, e através deles podemos dar dinamismo a uma function. O parâmetro é colocado dentro dos parêntesis de uma função. 

Enquanto os argumentos são os "valores" deste parâmetro, eles serão passados quando invocarmos a função. É como se o parâmetro fosse o identificador de uma variável, e o argumento sendo o valor desta variável. 

</br>

### Veja o exemplo abaixo.: 

```js
funtion pessoa(nome){  // "nome" é o parâmetro
    console.log(nome);
}
pessoa('Guilherme');   // 'Guilherme' é o argumento que será colocado no parâmetro "nome"

// Resultaldo no console: Guilherme
```

O parâmetro desta function se chama "nome". Para darmos um valor a este parâmetro, basta
passar um argumento quando invocarmos uma função.