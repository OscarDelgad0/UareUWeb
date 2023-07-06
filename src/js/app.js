const variables = {
    
}


document.addEventListener('DOMContentLoaded', function(){
  mostrarEmpleados();
  sensor();
  colocarEmpleados();
})

async function consultarAPIEmpleados() {
  try {
      const url = 'http://localhost:3000/APIEnviarEmpleados.php';
      const resultado = await fetch(url);
      const empleados = await resultado.json();
      return empleados;
  } catch (error) {
      console.log(error);
  }
}
async function consultarAPIActualizacion() {
  // Muestra informacion de la BD si el sensor o al web hicieron cambios
  try {
      const url = 'http://localhost:3000/APISensor.php';
      const resultado = await fetch(url);
      const sensor = await resultado.json();
      return sensor;
  } catch (error) {
      console.log(error);
  }
}
async function consultarAPIAsistencia() {
  // Consultar la ultima asistencia registrada
  try {
      const url = 'http://localhost:3000/APIAsistencia.php';
      const resultado = await fetch(url);
      const asistencia = await resultado.json();
      return asistencia;
  } catch (error) {
      console.log(error);
  }
}


async function colocarEmpleados(){
      const empleados = await consultarAPIEmpleados();
      console.log(empleados);
}
async function mostrarEmpleados(){

  // Consu
  const contenedor = document.querySelector('.contenedor-empleados');

  if(contenedor){
    const empleados = await consultarAPI();
    console.log(empleados);
    empleados.forEach( empleado => {
      const {id, nombre} = empleado;
  
      const divEmpleado = document.createElement('div');
      const idEmpleado = document.createElement('P');
      const nombreEmpleado = document.createElement('P');
  
      idEmpleado.textContent = id;
      nombreEmpleado.textContent = nombre;
  
      divEmpleado.appendChild(idEmpleado);
      divEmpleado.appendChild(nombreEmpleado);
  
      contenedor.appendChild(divEmpleado);
    })
  }
}


async function sensor(){
    const sensor = await consultarAPIActualizacion();
    var res = parseInt(sensor[0].status_asistencia);;
     var status_asistencia = Boolean(res);

     console.log(sensor[0].status_asistencia);
     console.log(status_asistencia);

    //  actualizarMenuAsistencia();
    //  actualizarAsistencia(sensor);
     if(status_asistencia){
      console.log("Sin cambios");
     }else {
      console.log("Con cambios");
     }


        // Capturar la fecha y hora actual
    //   const fechaActual = new Date();
      
    //   // Obtener la fecha y la hora en formato string
    //   const constFecha = fechaActual.toISOString().split('T')[0];
    //   const constHora = fechaActual.toLocaleTimeString('es-ES');

    // if(sensor[0].actualizacion == 'last'){
    //   console.log('SIn sensor')
    // }else if(sensor[0].actualizacion == 'actualizado') {
    //   setTimeout(() => {
    //     sensor[0].date_actualizacion_now = constFecha;
    //     sensor[0].time_actualizacion_now = constHora;
    //     sensor[0].date_actualizacion_past = constFecha;
    //     sensor[0].time_actualizacion_past = constHora;
    //     sensor[0].actualizacion = 'last';
    //     actualizarEmpleados(sensor);
    //   }, 1000);
    // }

    //  if(sensor[1].actualizacion == 'actualizado'){
    //   console.log('sensor en asistencia');
    //   sensor[1].date_actualizacion_now = constFecha;
    //   sensor[1].time_actualizacion_now = constHora;
    //   sensor[1].date_actualizacion_past = constFecha;
    //   sensor[1].time_actualizacion_past = constHora;
    //   sensor[1].actualizacion = 'last';
    //   actualizarMenuAsistencia();
    //   actualizarAsistencia(sensor);
    // }
}

async function actualizarAsistencia(sensor){

  
  const { id, time_actualizacion_now, date_actualizacion_now, time_actualizacion_past, date_actualizacion_past }  = cambios[0];
  const datos = new FormData();

  datos.append('id', 2);
  datos.append('time_actualizacion_now', time_actualizacion_now);
  datos.append('date_actualizacion_now', date_actualizacion_now);
  datos.append('time_actualizacion_past', time_actualizacion_past);
  datos.append('date_actualizacion_past', date_actualizacion_past);
  datos.append('actualizacion', 'last');

  try {
    // Petición hacia la api
    const url = 'http://localhost:3000/POSTCambios.php';
    const respuesta = await fetch(url, {
        method: 'POST',
        body: datos
    });
    const resultado = await respuesta.json();
    } catch (error) {
      
    }

}
async function actualizarMenuAsistencia(){
      const cardEmpleado = document.querySelector('.detector-hora')
      const nombreEmpleado = document.querySelector('.nombre-card-asistencia');
      const hora = document.querySelector('.hora-card-asistencia');
      const atiempo = document.querySelector('.atiempo');
      const tarde = document.querySelector('.tarde');

      const ultimaAsistencia = await consultarAPIAsistencia();
      const {id, nombre, verificado} = ultimaAsistencia[0];   

            console.log(ultimaAsistencia[0])
           // Obtener la hora y los minutos
            var fecha = new Date();
            var horas = fecha.getHours();
            var minutos = fecha.getMinutes();
            // Determinar si es AM o PM
            var periodo = horas >= 12 ? 'PM' : 'AM';
            // Convertir las horas al formato de 12 horas
            horas = horas % 12;
            horas = horas ? horas : 12; // Si horas es 0, establecerlo como 12
            // Agregar un cero inicial si los minutos son menores a 10
            minutos = minutos < 10 ? '0' + minutos : minutos;
            // Crear el formato de la hora
            var formatoHora = horas + ':' + minutos + ' ' + periodo;

      hora.textContent = formatoHora;
      nombreEmpleado.textContent = nombre;

      cardEmpleado.classList.remove('visible');
      setTimeout( function() {
        cardEmpleado.classList.add('visible');
      }, 3200); 
      
      if(horas <= 10){
       setTimeout( function() {
        atiempo.classList.remove('visible');
          setTimeout( function() {
          atiempo.classList.add('visible');
          }, 2000); 
      }, 2000); 
        
      }else {
        setTimeout( function() {
          tarde.classList.remove('visible');
            setTimeout( function() {
            tarde.classList.add('visible');
            }, 2000); 
        }, 2000); 
      }
}

// const datos = new FormData();
// datos.append('id', id);
// datos.append('id_empleado', id_empleado);
// try {
//   // Petición hacia la api
//   const url = 'http://localhost:3000/POSTAsistencia.php';
//   const respuesta = await fetch(url, {
//       method: 'POST',
//       body: datos
//   });
//   const resultado = await respuesta.json();
//   } catch (error) {
    
//   }

async function actualizarEmpleados(cambios){

  const { id, time_actualizacion_now, date_actualizacion_now, time_actualizacion_past, date_actualizacion_past }  = cambios[0];
  const datos = new FormData();
  datos.append('id', id);
  datos.append('time_actualizacion_now', time_actualizacion_now);
  datos.append('date_actualizacion_now', date_actualizacion_now);
  datos.append('time_actualizacion_past', time_actualizacion_past);
  datos.append('date_actualizacion_past', date_actualizacion_past);
  datos.append('actualizacion', 'last');
  try {
    // Petición hacia la api
    const url = 'http://localhost:3000/POSTCambios.php';
    const respuesta = await fetch(url, {
        method: 'POST',
        body: datos
    });
    const resultado = await respuesta.json();
    } catch (error) {
      
    }
}

function verificador(){
    setInterval(sensor, 1000);
}

setTimeout(verificador, 5000);


