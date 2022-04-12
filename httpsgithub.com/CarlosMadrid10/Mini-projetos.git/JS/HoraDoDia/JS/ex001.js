
function carregar(){
    var msg =  document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var data = new Date()  
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia
        document.body.style.background = "#eddfd2"
        imagem.src = "../Imagens/manha.png"
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        imagem.src = "../Imagens/tarde.png"
        document.body.style.background = "#e19a62"
    }else{
        //boa noite
        imagem.src = "../Imagens/noite.png"
        document.body.style.background = "#a67eb2"
    }
}