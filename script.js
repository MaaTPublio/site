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
  var motBox = document.getElementById("motCont");
  var emailCont = document.getElementById("email");
  var buttonEnviar = document.getElementById("buttonEnviar");
  motCont = motBox.options[motBox.selectedIndex].text;
  emailCont2 = emailCont.value;
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  usuario = email.value.substring(0, email.value.indexOf("@"));
  dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
  if ((usuario.length >=1) &&
  (dominio.length >=3) &&
  (usuario.search("@")==-1) &&
  (dominio.search("@")==-1) &&
  (usuario.search(" ")==-1) &&
  (dominio.search(" ")==-1) &&
  (dominio.search(".")!=-1) &&
  (dominio.indexOf(".") >=1)&&
  (dominio.lastIndexOf(".") < dominio.length - 1)){
    console.log("Email valido")
      if (motCont == "Selecione") {
        window.alert("Não deixe o motivo de contato em branco!!");
  }
      else{
          const contDuvTxt2 = document.querySelector("#contDuvTxt");
          const contTxt = contDuvTxt2.value;
        if ( contTxt == "" ){
           window.alert("Não deixe o a descrição de contato em branco!!");
      }
        else{
          window.alert("Solicitação de contato enviada!");
          setTimeout(contatoEnviar,20);
        }}}
  else {
    window.alert("Digite um email válido")
    buttonEnviar.removeAttribute("disabled");
}})



function contatoEnviar (){
  buttonEnviar.setAttribute("disabled","true");
  console.log("Contato Enviar")
  setTimeout(contatoEnviado, 1, buttonEnviar)
}

function contatoEnviado (buttonEnviar){
      const contDuvTxt2 = document.querySelector("#contDuvTxt");
      const contTxt = contDuvTxt2.value;
      console.log(contTxt);
      var motBox = document.getElementById("motCont");
        motCont = motBox.options[motBox.selectedIndex].text;
        console.log(motCont)
        console.log(`O motivo do seu contato foi relacionado a ${motCont}`)
        
        setTimeout(solicitacoesCont,20);
}

function solicitacoesCont(){

const paragrafo = document.createElement("p");
const texto = document.createTextNode("Testando");
paragrafo.appendChild(texto);
console.log(paragrafo);

}