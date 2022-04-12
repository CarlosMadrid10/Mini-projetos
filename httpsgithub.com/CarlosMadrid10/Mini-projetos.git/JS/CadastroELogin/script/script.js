let valorLogin
let valorSenha
let usuarios = []
let usuario
let idUser = 0
let confirma

statusLogin = JSON.parse(sessionStorage.getItem("status"))

function efetuarCadastro(){
    
    usuarios = JSON.parse(localStorage.getItem("usuarios"))


    valorLogin = document.getElementById("puxarCadastroLogin").value
    valorSenha = document.getElementById("puxarCadastroSenha").value

    if (valorSenha.length < 8){
        alert("A senha deve ter, no mínimo, 8 digitos.")
    }
    else if(valorLogin.length < 1){
        alert("Digite um usuário válido.")
    }
    else if (usuarios == null){
            usuario = {
                id: idUser++,
                login: valorLogin,
                senha: valorSenha,
            }
            usuarios = []
            usuarios.push(usuario)
    
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            alert ("Cadastro realizado!")
        }
        else{
            confirma = 0
            for(let i = 0; i < usuarios.length; i++){
                if(usuarios[i].login == valorLogin){
                    alert("Usuário já existente.")
                    console.log(i)
                    confirma = 1
                }
            }
        if (confirma == 0){
            usuario = {
                id: idUser++,
                login: valorLogin,
                senha: valorSenha,
            }
            usuarios.push(usuario)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            alert ("Cadastro realizado!")
        }
        }
    }

    function efetuarLogin (){

        usuarios = JSON.parse(localStorage.getItem("usuarios"))
        confirma = 0
        valorLogin = document.getElementById("puxarLogin").value
        valorSenha = document.getElementById("puxarSenha").value

        if (valorLogin < 1 || valorSenha < 1){
            alert("Digite os dados corretamente!") 
        }
        else{
            for (var j = 0; j < usuarios.length; j++){
                if(usuarios[j].login == valorLogin && usuarios[j].senha == valorSenha){
                    confirma = 1
                }
            }
    
            if (confirma == 1){

                sessionStorage.setItem("Status", JSON.stringify(statusLogin))
                alert(`Login realizado com sucesso!`)
                window.location.href = "../pos-login/index.html"
            }
            else{
                alert("Usuário ou senha incorretos")
                window.location.reload
            }
        }
    }
    

function redirecionaLogin(){
    window.location.href = "../login/index.html"
}

function redirecionaCadastro(){
    window.location.href = "../cadastro/index.html"
}

function deslogar(){
    window.location.href = "../login/index.html"
}