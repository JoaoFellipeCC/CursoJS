//Funções em objetos
var age = 17
var gender = 'M'
var user = {
    sayHello(name){
        return `Olá, ${name}!`
    },
    age,    //caso tenha o mesmo nome, podemos inserir uma variável externa à função dessa forma.
    gender
}
console.log(user.sayHello('Fellipe'))
console.log(`Idade:${user.age}      gênero:${user.gender}`)