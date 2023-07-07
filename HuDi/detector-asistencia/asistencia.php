<?php include '../base/header.php' ?>


<h2>Asistencia</h2>

<div class="contenedor-grid">

    <div class="opciones-menu texto-asistencia">
        <p>Colinas San Javier</p>
        <p>8:30am</p>
        <p>Favor de colocar su huella en el sensor dactilar</p>
    </div>

    <div class="opciones-menu">
        <img src="../../public/build/img/huella.webp" alt="">
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
                            <img src="../../public/build/img/Personal.png" alt="">
                        </div>
                     
    </div>

    <div class="contenedor-grid">
        <div class="notificacion-asistencia-contenedor">
                            <p class="notificacion-asistencia"></p>
        </div>
    </div>

 </div> <!-- card empleado -->
 <script src="../../public/build/js/app.js"></script>

 <?php include '../base/footer.php' ?>
