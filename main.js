function enviar(){
    var Nome =""
    Nome = document.getElementById('nome').value
    var Mensagem = ""
    Mensagem = document.getElementById('Mensagem').value
    resultado = Nome + ':' + Mensagem
    document.getElementById('resultados').innerHTML = resultado   
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "Excluir";                   
    btn.style.background = ' rgb(41, 41, 160)'
    resultados.appendChild(btn)


}