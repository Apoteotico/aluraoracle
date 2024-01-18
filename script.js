let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor:");

console.log(numeroUsuario);

// Obtener el elemento del mensaje
var mensajeTexto = document.getElementById("mensajeTexto");

if (numeroUsuario == numeroSecreto) {
  alert("¡Acertaste el número!");
} else if (isNaN(numeroUsuario)) {
  alert("Por favor, ingresa un número válido");
} else if (numeroUsuario === "") {
  alert("No ingresaste ningún número");
} else {
  // Cambiar el mensaje en el contenido HTML
  mensajeTexto.innerHTML = '<h1><span class="container__texto-rojo">¡Incorrecto!</span></h1>';
  mensajeTexto.innerHTML += '<h2>Intenta nuevamente</h2>';
  alert("No acertaste jajaja");
}
