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
        res.innerHTML = `Contando:<br>`
        if(!cont){
            window.alert('Passo invalido! Considerando PASSO 1.')
            cont = 1
        }
        if(start < end){
            for(start; start <= end; start += cont){
                res.innerHTML += ` ${start} \u{1F449}>`
            }
            res.innerHTML += '\u{1F3C1}'
        }else{
            for(start; start >= end; start -= cont){
                res.innerHTML += ` ${start} \u{1F449}>`
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
    
}