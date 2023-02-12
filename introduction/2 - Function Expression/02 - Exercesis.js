// Exercício 01 - Cartão de identidade
var pessoa = function(name, idade, peso, altura, sexo) {
    return` 
    Dados pessoais.:
    Nome: ${name}
    Idade ${idade}
    Peso: ${peso}kg
    Altura: ${altura} cm
    Sexo: ${sexo} 
    `
}
console.log(pessoa('Flora', 17, 61, 173, 'feminino'))




const name = function(nome){
    console.log('Quantidade de letras: ' + nome.replaceAll(' ', '').length)
}
name('Guilherme');



const omg = city => console.log(`Cidade informada: ${city}`)
omg('New York')



