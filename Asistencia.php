<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="public/build/css/app.css">

</head>
<body>
<div class="contenedor-app">
        <div class="contenedor-asistencia">
            <div class="encabezado-form">
                <h2>Asistencia</h2>
                <p>Cerrar</p>
             </div>
                <div class="form-asistencia">
                    <div class="cards-asistencia empleados">
                        <p>Colinas San Javier</p>
                        <p>8:30am</p>
                        <p>Favor de colocar su huella en el sensor dactilar</p>
                    </div>

                    <div class="cards-asistencia">
                            <img src="public/build/img/huella.webp" alt="">
                    </div>
                        
                </div>
                
                <div class="cards-asistencia asistencia-empleado visible">
                        <div class="card-empleado-asistencia">
                            <p >Nombre</p>
                            <p class="nombre-card-asistencia"></p>
                            <p >Hora de entrada</p>
                            <p class="hora-card-asistencia"></p>
                        </div>
                        <div class="card-empleado-asistencia">
                            <img src="public/build/img/Personal.png" alt="">
                        </div>
                </div> <!-- card empleado -->
                <div class="cards-asistencia asistencia-empleado atiempo visible">
                        <div class="card-empleado-asistencia">
                            <p>Bienvenido(a)</p>
                            <p> estas a tiempo</p>
                            <p>continua asi</p>
                        </div>
                        <div class="card-empleado-asistencia">
                            <img src="public/build/img/comprobado.png" alt="">
                        </div>
                </div> <!-- card empleado -->
                <div class="cards-asistencia asistencia-empleado tarde visible">
                        <div class="card-empleado-asistencia">
                            <p>Bienvenido(a)</p>
                            <p>has llegado tarde</p>
                            <p>hoy no podremos recibirte</p>
                        </div>
                        <div class="card-empleado-asistencia">
                            <img src="public/build/img/cancelar.png" alt="">
                        </div>
                </div> <!-- card empleado -->
                
                <div class="card-asistencia alerta">
                    
                </div><!-- card empleado -->
        </div> <!-- contenedor asistencia -->
     </div> <!-- contenedor app -->

    <script src="public/build/js/app.js"></script>
</body>
</html>
