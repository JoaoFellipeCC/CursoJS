function contar(){
    var starttxt = window.document.getElementById('start')
    var start = Number(starttxt.value)
    var endtxt = window.document.getElementById('end')
    var end = Number(endtxt.value)
    var conttxt = window.document.getElementById('cont')
    var cont = Number(conttxt.value)
    var res = window.document.getElementById('res')
    if(start == "" || end == ""){
        res.innerHTML = `<p>Impossível contar!</p>`
    }else{
        res.innerHTML = ''
        if(!cont){
            window.alert('Passo invalido! Considerando PASSO 1.')
            cont = 1
        }
        for(start; start <= end; cont){
            res.innerHTML += ` ${start} >`
            start += cont
        }
        res.innerHTML += ' fim'
    }
    
}