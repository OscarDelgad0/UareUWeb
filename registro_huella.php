<?php 
    require 'includes/app.php';
?>
 <!-- INDEX PRINCIPAL -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asistencia</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700;900&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="public/build/css/app.css">
</head>
<body>

    <div class="contenedor-app">
        <div class="contenedor-menu">
        <h2>Huellas dactilares</h2>

<div class="contenedor-grid huella-detector">
        <div class="opciones-menu">
            <button>inciar proceso de registro</button>

            <div class="informacion-detector-huella">

                <p>Detectando</p>
                <p>Ultimo registro:</p>
                <p class="id"></p>
                <p>Fecha de registro: </p>
                <p class="fecha"></p>
                <p>Hora de registro: </p>
                <p class="hora"></p>

            </div>
        </div>

        <div class="opciones-menu">

        <div class="panel-huella buscar">
             <p>Selecciona un usuario</p>
        </div>

        <div class="panel-huella mostrar">
            
            <img src="" alt="">
            <form class="formulario" method="POST" enctype="multipart/form-data" action="../../GuardarHE.php">
                <fieldset>
                    <legend>Empleados</legend>
                        <select name="empleado[id]" id="empleado";>
                             <option selected value="" >-- Seleccione --</option>
                         </select>
                         
                         <input type="hidden" value="" class="id-huella" name="huella[id]">

                    <input type="submit" value="Guardar huella" class="boton-huella">
                </fieldset>
            </form>

            <form class="formulario" method="POST" enctype="multipart/form-data" action="../../GuardarE.php">
                <fieldset>
                    <legend>Empleados</legend>
                         <label for="nombre">nombre </label>
                         <input type="text" id="nombre" name="nombre" placeholder="Tu nombre">   
                         <input type="hidden" value="null" name="id_huella" >           
                         <label for="hora">Selecciona una hora:</label>
                        <input type="time" id="hora" name="hora_entrada">
                    <input type="submit" value="Guardar empleado" class="boton-huella">
                </fieldset>
            </form>
        </div>



        </div>
</div>

        </div> 
    </div>
    <script src="public/build/js/ventana.js"></script>
    <script src="public/build/js/registro.js"></script>
    <script src="public/build/js/app.js"></script>
</body>
</html>