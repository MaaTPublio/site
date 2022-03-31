function doDemo (button) {
  var quadrado = document.getElementById("quadrado");
  quadrado.style.backgroundColor = "purple";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
}

function clearDemo (button) {
  var quadrado = document.getElementById("quadrado");
  quadrado.style.backgroundColor = "transparent";
  button.removeAttribute("disabled");
}

function doMsg (button) {
  window.alert("Teste de mensagem!! O botão ficará desabilitado por alguns segundos!");
  button.setAttribute("disabled", "true");
  setTimeout(clearMsg, 3000, button);
}

function clearMsg (button){
  window.alert("O botão pode ser apertado novamente")
  button.removeAttribute("disabled")
  //window.prompt("E ae")
}
function contato(){
  var motBox = document.getElementById("motCont");
  motCont = motBox.options[motBox.selectedIndex].text;
  console.log(motCont)

}
const btn = document.querySelector("#buttonEnviar");

btn.addEventListener("click", function(e) {
  e.preventDefault();
  const contDuvTxt2 = document.querySelector("#contDuvTxt");
  const  value = contDuvTxt2.value;
  console.log(value);
});

/*
function contatoEnviar (buttonEnviar){
  buttonEnviar.setAttribute("disabled","true");
  console.log("Contato Enviar")
  setTimeout(contatoEnviado, 500, buttonEnviar)
}

function contatoEnviado (buttonEnviar){
  var motBox = document.getElementById("motCont");
  var buttonEnviar = document.getElementById("buttonEnviar");
  motCont = motBox.options[motBox.selectedIndex].text;
  if (motCont == "Selecione"){
    window.alert("Não deixe o motivo de contato em branco!!");
    buttonEnviar.removeAttribute("disabled");
  }
  else {
    window.alert("Solicitação de contato enviada!");
    var contOculto = document.getElementById("conteudo-oculto");
    var contMain = document.getElementById("conteudo-principal");
    var contTit = document.getElementsById("conteudo-titulo");
    contOculto.style.display = "flex";
    contMain.style.display = "none";
    contTit.style.display ="none";
    setTimeout(initCont,1);
}
}


function initCont (){
  console.log(motCont)
  if (motCont == "Dúvida")
    window.alert("O motivo de seu contato foi relacionado a duvidas")
}
*/
