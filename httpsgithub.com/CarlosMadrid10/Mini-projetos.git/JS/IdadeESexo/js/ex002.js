function Verificar(){
    var data =  new Date
    var ano = data.getFullYear()
    var nascAno = document.getElementById("nasc")
    var res = document.querySelector("div#res")

    if(nascAno.value.length == 0 || Number(nascAno.value) > ano){
        alert("Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(nascAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '../imagens/crianca-homem.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', '../imagens/jovem-homem.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src','../imagens/adulto.png')
            }
            else{
                //idoso
                img.setAttribute('src', '../imagens/idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '../imagens/crianca-mulher.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', '../imagens/jovem-mulher.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src','../imagens/adulta.png')
            }
            else{
                //idoso
                img.setAttribute('src', '../imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}