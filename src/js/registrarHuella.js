
document.addEventListener('DOMContentLoaded', function(){
    colocarEmpleados();
    colocarHuella();
    verificador();

  })


  async function consultarAPIEmpleados() {
    try {
        const url = 'https://funerariaslatinoamericana.com/asistencia/APIEnviarEmpleados.php';
        const resultado = await fetch(url);
        const empleados = await resultado.json();
        return empleados;
    } catch (error) {
        console.log(error);
    }
  }
  async function consultarUltimaHuella() {
    try {
        const url = 'https://funerariaslatinoamericana.com/asistencia/APIEnviarHuella.php';
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
        const url = 'https://funerariaslatinoamericana.com/asistencia/APISensor.php';
        const resultado = await fetch(url);
        const sensor = await resultado.json();
        return sensor;
    } catch (error) {
        console.log(error);
    }
  }


  async function actualizaRegistro(sensor){
    const datos = new FormData();
  
    for (const campo in sensor[0]) {
        datos.append(campo, sensor[0][campo]);
    }
    datos.append('status_registro', 1);  
    datos.append('status_asistencia', 0);  
  
    try {
      // Petición hacia la api
      const url = 'https://funerariaslatinoamericana.com/asistencia/POSTCambios.php';
      const respuesta = await fetch(url, {
          method: 'POST',
          body: datos
      });
      const resultado = await respuesta.json();
      } catch (error) {
        
      }
  
  }
  async function colocarEmpleados(){
    const sensor = await consultarAPIActualizacion();
    var res1 = parseInt(sensor[0].status_registro);;
    var status_registro = Boolean(res1);

    var res2 = parseInt(sensor[0].status_asistencia);;
    var status_asistencia = Boolean(res2);



    if(status_registro){
      console.log("Sin cambios");
     }

     if(!status_registro){
      actualizaRegistro(sensor);
     }

     
     if(status_registro && status_asistencia){
      actualizaRegistro(sensor);
     }

    const empleados = await consultarAPIEmpleados();
    const inputEmpleados = document.querySelector('#empleado');
    console.log(empleados);
    empleados.forEach( empleado => {

        const {id, nombre, id_huella}  = empleado
        console.log(id_huella);
        if(id_huella != 0 && id_huella != null){

        }else {
          const option = document.createElement('OPTION');
          option.value = id;
          option.text = nombre;
          inputEmpleados.appendChild(option);
        }

    })    
}

async function colocarHuella(){
  const huella = await consultarUltimaHuella();
  const idTexto = document.querySelector('.id');
  const fechaTexto = document.querySelector('.fecha');
  const horaTexto = document.querySelector('.hora');
  const inputValue = document.querySelector('.id-huella');
  const inputValues = document.querySelector('.id-empleado');
  const {id, id_empleado, fecha_creacion, hora_creacion} = huella[0];

  if(id_empleado) {
    console.log('Huella ya registrada con usuario, desea sobreescribir?')
  }else {
    idTexto.textContent = id;
    fechaTexto.textContent = fecha_creacion;
    horaTexto.textContent = hora_creacion;
    inputValue.value = id;
    inputValues.value = id;

  }
}

// function verificador(){
//     setInterval(colocarHuella, 1000);
// }