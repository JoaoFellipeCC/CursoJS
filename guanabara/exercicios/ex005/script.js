let numtxt = window.document.getElementById('num')
let list = window.document.getElementById('numList')
let res = window.document.getElementById('res')
let values = []

function numCheck(n){
    if(n >=1 && n <=100){
        return true
    }else{
        return false
    }
}

function listCheck(n, val){
    if(val.indexOf(Number(n)) == -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(numCheck(numtxt.value) && listCheck(numtxt.value, values)){
        res.innerHTML = ''
        let num = Number(numtxt.value)
        let item = window.document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        list.appendChild(item)
        values.push(num)
    }else{
        alert('Valor inválido ou já encontrado na lista!')
    }
}

function finalizar(){
    values.sort()
    let sum = 0
    for(let c = 0; c < values.length; c++){
        sum += values[c]
    }
    res.innerHTML = `<p>Ao todo, temos ${values.length} valores cadastrados.</p> <br>`
    res.innerHTML += `<p>O maior valor informado foi ${values[values.length-1]}.</p> <br>`
    res.innerHTML += `<p>O menor valor informado foi ${values[0]}.</p> <br>`
    res.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p> <br>` 
    res.innerHTML += `<p>A média dos valores digitados é ${sum/values.length}.</p>`
}

