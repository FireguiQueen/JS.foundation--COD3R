function Greeting(function_number){
    console.log(`Função ${function_number} - Olá!`);
    console.log('--------------------------------------------------');
}
Greeting('01');




function SayHiTo(function_number, name){
    console.log(`Função ${function_number} - Olá, ${name}!`)
    console.log('--------------------------------------------------')

}
SayHiTo('02', 'Fabio')





function GreetingTo(function_number){
    return `Função ${function_number} - Olá, a keyword "return" retorna algo. Este "algo" pode ser armazenada em variáveis ou inserido no HTML/CONSOLE`
}
console.log(GreetingTo('03'))
