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

