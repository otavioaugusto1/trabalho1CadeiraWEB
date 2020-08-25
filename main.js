function enviar(){
    var Nome =""
    var Mensagem = ""
    Nome = document.getElementById('nome').value
    Mensagem = document.getElementById('Mensagem').value
    resultado = Nome + ' : ' + Mensagem  
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "Excluir";                   
    btn.style.background = ' rgb(41, 41, 160)'
    btn.style.marginLeft= '20px'
    
    var li = document.createElement("li");
    var t = document.createTextNode(resultado);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("nome").value = "";
    document.getElementById("Mensagem").value = "";

    var span = document.createElement("SPAN");
    span.className = "close";
    span.appendChild(btn);
    li.appendChild(span);

     
}


function mudacor1(){
    var botao1 = document.getElementById('high1')
    document.body.style.backgroundColor = 'black'
}
function mudacor2(){
    var botao2 = document.getElementById('high1')
    document.body.style.backgroundColor = ' rgb(69, 69, 194)'
    
}
function mudacor3(){
    var botao3 = document.getElementById('high1')
    document.body.style.backgroundColor = 'purple'
}