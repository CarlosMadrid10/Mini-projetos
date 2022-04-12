function Digita(num){
var numero = document.getElementById("visor_resultado").innerHTML
document.getElementById("visor_resultado").innerHTML = numero + num
}
function Limpa(){
    document.getElementById("visor_resultado").innerHTML = ""
}

function Apaga(){
    var numero = document.getElementById("visor_resultado").innerHTML
    document.getElementById("visor_resultado").innerHTML = numero.substring(0,numero.length -1)
}

function Calcular(){
    var numero = document.getElementById('visor_resultado').innerHTML
    document.getElementById("visor_resultado").innerHTML = eval(numero)
}