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

async function consultarAPIHuella() {
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
      const url = 'http://localhost:3000/APIUltimaHuella.php';
      const resultado = await fetch(url);
      const asistencia = await resultado.json();
      return asistencia;
  } catch (error) {
      console.log(error);
  }
}


async function colocarEmpleados(){
      const empleados = await consultarAPIEmpleados();
}
async function mostrarEmpleados(){

  // Consu
  const contenedor = document.querySelector('.contenedor-empleados');

  if(contenedor){
    const empleados = await consultarAPI();
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
     var res1 = parseInt(sensor[0].status_asistencia);;
     var status_asistencia = Boolean(res1);

     var res2 = parseInt(sensor[0].status_registro);;
     var status_registro = Boolean(res2);

    //  actualizarMenuAsistencia();
    //  actualizarAsistencia(sensor);
     if(status_asistencia){
      console.log("Sin cambios");
     }

     if(!status_asistencia){
      actualizarMenuAsistencia();
      actualizarAsistencia(sensor);
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
  const datos = new FormData();

  for (const campo in sensor[0]) {
      datos.append(campo, sensor[0][campo]);
  }
  datos.append('status_asistencia', 1);  

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
      const notificacion = document.querySelector('.notificacion-asistencia');
      const contenedorNotificacion = document.querySelector('.notificacion-asistencia-contenedor');
      const tarde = document.querySelector('.tarde');
      const ultimaAsistencia = await consultarAPIAsistencia();
      const {nombre, hora_entrada, apellido} = ultimaAsistencia;   
           // Obtener la hora y los minutos
            var fecha = new Date();
            var horaLlegada = fecha.getHours();
            var minutoLlegada = fecha.getMinutes();

            var horaCorrida = horaLlegada;
            // Determinar si es AM o PM
            var periodo = horaLlegada >= 12 ? 'PM' : 'AM';
            // Convertir las horaLlegada al formato de 12 horaLlegada
            horaLlegada = horaLlegada % 12;
            horaLlegada = horaLlegada ? horaLlegada : 12; // Si horaLlegada es 0, establecerlo como 12
            // Agregar un cero inicial si los minutoLlegada son menores a 10
            minutoLlegada = minutoLlegada < 10 ? '0' + minutoLlegada : minutoLlegada;
            // Crear el formato de la hora
            var formatoHora = horaLlegada + ':' + minutoLlegada + ' ' + periodo;
          // Obtener las horaLlegada y minutos de la hora de entrada
          var [horaEntrada, minutoEntrada] = hora_entrada.split(':');
          
          horaEntrada = parseInt(horaEntrada);
          minutoEntrada = parseInt(minutoEntrada);
          horaCorrida = parseInt(horaCorrida);

          var entrada = horaEntrada*60 + minutoEntrada;
          var llegada = horaCorrida*60 + minutoLlegada;

          console.log(entrada);
          console.log(llegada);

          if(llegada <= entrada){
            notificacion.textContent = "A tiempo";

            if(contenedorNotificacion.classList.contains('atiempo') || contenedorNotificacion.classList.contains('falta') || contenedorNotificacion.classList.contains('retardo')){
              contenedorNotificacion.classList.remove('atiempo');
              contenedorNotificacion.classList.remove('falta');
              contenedorNotificacion.classList.remove('retardo');
            }
            contenedorNotificacion.classList.add('atiempo');
          }
          else if(llegada > entrada && llegada <= entrada + 10){
            notificacion.textContent = "Retardo";
            if(contenedorNotificacion.classList.contains('atiempo') || contenedorNotificacion.classList.contains('falta') || contenedorNotificacion.classList.contains('retardo')){
              contenedorNotificacion.classList.remove('atiempo');
              contenedorNotificacion.classList.remove('falta');
              contenedorNotificacion.classList.remove('retardo');
            }
            contenedorNotificacion.classList.add('retardo');
          }
          else {
            notificacion.textContent = "Falta";
            if(contenedorNotificacion.classList.contains('atiempo') || contenedorNotificacion.classList.contains('falta') || contenedorNotificacion.classList.contains('retardo')){
              contenedorNotificacion.classList.remove('atiempo');
              contenedorNotificacion.classList.remove('falta');
              contenedorNotificacion.classList.remove('retardo');
            }
            contenedorNotificacion.classList.add('falta');
          }

          hora.textContent = formatoHora;
          nombreEmpleado.textContent = nombre;
          cardEmpleado.classList.remove('visible');
          setTimeout( function() {
            cardEmpleado.classList.add('visible');
          }, 4200); 
          
          // if(horas <= 10){
          //  setTimeout( function() {
          //   atiempo.classList.remove('visible');
          //     setTimeout( function() {
          //     atiempo.classList.add('visible');
          //     }, 2000); 
          // }, 2000); 
            
          // }else {
          //   setTimeout( function() {
          //     tarde.classList.remove('visible');
          //       setTimeout( function() {
          //       tarde.classList.add('visible');
          //       }, 2000); 
          //   }, 2000); 
          // }

          // console.log(parseInt(minutoEntrada) + 10 + " Retardo");
          // console.log(hora_entrada);

          // console.log(horaEntrada + " : " + minutoEntrada + " <- Hora de entrada");
          // console.log(horas + " : " + minutos + " <- Hora local");

          // if( minutos <= parseInt(minutoEntrada + 10)){
          //   console.log( minutos + ' ' + parseInt(minutoEntrada)  + 'Entrada tarida');
          // }

          // // Comparar la hora de entrada con la hora actual
          // if (horas <= parseInt(horaEntrada) && minutos <= parseInt(minutoEntrada)) {
          //   console.log('Llegando a tiempo');
          // }else if(horas > parseInt(horaEntrada) && minutos > (parseInt(minutoEntrada) + 10) && minutos <= (parseInt(minutoEntrada)  + 10)) {
          //   console.log('retardo');
          // }
          // else{
          //   console.log('Ya paso la hora de entrada');
          // }
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

// function verificador(){
//     setInterval(sensor, 2000);
// }

// setTimeout(verificador, 5000);


