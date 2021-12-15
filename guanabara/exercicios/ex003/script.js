function contar(){
    var starttxt = window.document.getElementById('start')
    var endtxt = window.document.getElementById('end')
    var conttxt = window.document.getElementById('cont')
    var res = window.document.getElementById('res')
    if(starttxt.value.length == 0 || endtxt.value.length == 0 || conttxt.value.length == 0){
        res.innerHTML = `<p>Impossível contar!</p>`
    }else{
        var start = Number(starttxt.value)
        var end = Number(endtxt.value)
        var cont = Number(conttxt.value)
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