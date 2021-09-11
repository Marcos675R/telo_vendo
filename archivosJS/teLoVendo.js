var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute:'numeric'};
var today  = new Date();
console.log(today.toLocaleDateString("es-ES", options));
document.getElementById("relojHoy").innerHTML = today.toLocaleDateString("es-ES", options) ;



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Ingresa tu nombre');
      return;
    }
    var correo = document.getElementById('telefono').value;
    if (correo.length == 0) {
      alert('Ingrese un teléfono válido');
      return;
    }
    var mensaje = document.getElementById('direccion').value;
    if (mensaje.length == 0) {
      alert('Ingrese una dirección válida');
      return;
    }
    var mensaje = document.getElementById('correo').value;
    if (mensaje.length == 0) {
      alert('Ingrese un correo válido');
      return;
    }
    this.submit();
  }