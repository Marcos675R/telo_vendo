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

  Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });
 