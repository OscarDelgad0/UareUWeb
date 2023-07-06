document.addEventListener('DOMContentLoaded', function(){
    botonControl();
    botonCerrar();
  })
  

  function botonCerrar(){
    const boton = document.querySelectorAll('.boton-ventana-cerrar');

  }

  function botonControl(){
    const botonesControl = document.querySelectorAll('.contenedor-grid button');    
    botonesControl.forEach( boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            const paso = boton.getAttribute('data-paso');

          if(paso == '1'){
            abrirVentanaConfiguracion();
          }else if(paso == '2'){
            abrirVentanaHuella();
          }
        });
    });

  }

  function abrirVentanaConfiguracion(){
    const ventana = document.querySelector('.sistema-control');
    ventana.classList.remove('visible');
  }

  function abrirVentanaHuella(){
    const ventana = document.querySelector('.detector-asistencia');
    ventana.classList.remove('visible');
  }

  function botonCerrar(){
      const botonCerrar = document.querySelectorAll('.boton-ventana-cerrar');
      botonCerrar.forEach( boton => {
        boton.addEventListener('click', function(e) {
          const paso = boton.getAttribute('data-paso');
          buscarVentana(paso);
        });
      });

  }

  function buscarVentana(paso){
    const ventanas = document.querySelectorAll('.ventana');
    ventanas.forEach( ventana => {
      const ventanaPaso = ventana.getAttribute('data-paso');
      if(paso == ventanaPaso){
        ventana.classList.add('visible');
      }
    })
  }