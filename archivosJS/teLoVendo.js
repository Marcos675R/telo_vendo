var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
console.log(today.toLocaleDateString("es-ES", options));
document.getElementById("relojHoy").innerHTML = today.toLocaleDateString("es-ES", options) ;
