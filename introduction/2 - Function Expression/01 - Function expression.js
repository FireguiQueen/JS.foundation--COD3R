/*
    Uma function expression é uma forma de definir uma função em JavaScript. 
    A diferença entre uma function expression e uma function declaration é que uma function 
    expression é atribuída a uma variável, enquanto uma function declaration é definida como 
    um identificador independente.
*/



// Em JS, uma variável pode assumir qualquer valor, 
// sendo assim você pode fazer outra variável receber a função que está na variável "sum"
function sum(n1,n2){
   console.log(n1 + n2) 
}
var SameSum = sum
SameSum(4, 5) 




const function1 = function(){
    console.log('Olá')
}
const sameFunction = function1
sameFunction()
