function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasctxt = window.document.getElementById('nasc')
    var nasc = Number(nasctxt.value)
    var res = window.document.getElementById('res')
    if(!nasc || nasc > ano){
        alert('VALOR INVALIDO INSERIDO!')
    }else{
        var idade = ano - nasc
        var sexo = window.document.getElementsByName('sexo')
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src','imagens/crianca-h.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/adolescente-h.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto-h.png')
            }else{
                img.setAttribute('src', 'imagens/idoso-h.png')
            }
        }else{
            gênero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/crianca-m.png')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/adolescente-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adulto-m.png')
            }else{
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}