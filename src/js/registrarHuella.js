
document.addEventListener('DOMContentLoaded', function(){
    colocarEmpleados();
    colocarHuella();
    verificador();

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
  async function consultarUltimaHuella() {
    try {
        const url = 'http://localhost:3000/APIUltimaHuella.php';
        const resultado = await fetch(url);
        const empleados = await resultado.json();
        return empleados;
    } catch (error) {
        console.log(error);
    }
  }


  async function colocarEmpleados(){
    const empleados = await consultarAPIEmpleados();
    const inputEmpleados = document.querySelector('#empleado');
    
    empleados.forEach( empleado => {

        const {id, nombre, id_huella}  = empleado
        console.log(id_huella);
        if(id_huella){

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
  const {id, id_empleado, fecha_creacion, hora_creacion} = huella[0];

  if(id_empleado) {
    console.log('Huella ya registrada con usuario, desea sobreescribir?')
  }else {
    idTexto.textContent = id;
    fechaTexto.textContent = fecha_creacion;
    horaTexto.textContent = hora_creacion;
    inputValue.value = id;

  }
}

// function verificador(){
//     setInterval(colocarHuella, 1000);
// }