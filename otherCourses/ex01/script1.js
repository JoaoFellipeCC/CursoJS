//Objetos em JavaScript
let aluno = {
    nome: 'João',
    sobrenome: 'Fellipe',
    idade: 17
}

console.log(aluno.nome, aluno.sobrenome)
console.log(aluno.idade)

aluno.nacionalidade = 'Brasilero'
console.log(aluno.nacionalidade)
delete aluno.nacionalidade


//Array em objetos
aluno.hobbies =['Ouvir música', 'Jogar', 'Malhar']
console.log(aluno.hobbies[2])