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
        <h2>Sistema de control de asistencia</h2>
    <div class="contenedor-grid">

       <div class="opciones-menu texto-asistencia">
        <p>Colinas San Javier</p>
        <p>hora de entrada: 8:30am</p>
        <p>Favor de colocar su huella en el sensor dactilar</p>
    </div>

    <div class="opciones-menu">
        <img src="public/build/img/huella.webp" alt="">
    </div>

    <div class="sensor-data">
        <p>Sensor desconectado</p>
    </div>
</div>


<div class="ventana detector-hora visible">
    <h2>Plaza</h2>
    <div class="contenedor-grid">
                        <div class="opciones-menu">
                            <p >Nombre</p>
                            <p class="nombre-card-asistencia"></p>
                            <p >Hora de entrada</p>
                            <p class="hora-card-asistencia"></p>
                        </div>
                        <div class="opciones-menu">
                            <img src="public/build/img/Personal.png" alt="">
                        </div>
                     
    </div>

    <div class="contenedor-grid">
        <div class="notificacion-asistencia-contenedor">
                            <p class="notificacion-asistencia"></p>
        </div>
    </div>

 </div> <!-- card empleado -->
        </div> 
    </div>
    
    <script src="public/build/js/ventana.js"></script>
    <script src="public/build/js/app.js"></script>
</body>
</html>