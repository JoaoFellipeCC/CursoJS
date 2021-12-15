function gerar(){
    var numtxt = window.document.getElementById('num')
    var tab = window.document.getElementById('seltab')
    if(numtxt.value.length == 0){
        window.alert('ERRO! Digite um valor.')
    }else{
        tab.innerHTML = ''
        var num = Number(numtxt.value)
        for(var c = 1; c <= 10; c++){
            var item = window.document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value(`tab${c}`)
            tab.appendChild(item)
        }
    }
}