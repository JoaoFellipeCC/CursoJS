//Junção de objetos

var user = {
    name: 'Paulo', 
    age: 37
}

var extra = {
    job: 'Policial',
    status: 'Vivo'
}

var newUser = Object.assign({}, user, extra)
console.log(newUser)