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
        <div class="opciones-menu">
           <a href="registro_huella.php">
               <img src="public/build/img/Programador.png" alt="">
               <p>Administrador</p>
           </a>
            </button>
        </div>
        <div class="opciones-menu">
              <a href="asistencia_inicio.php">
                    <img src="public/build/img/plazas.png" alt="plazas.png">
                    <p>Plazas</p>
                </a>
        </div>
    </div>


    
        <div class="ventana sistema-control visible" data-paso="1">
             <button class="boton-ventana-cerrar" data-paso="1">X</button>
        </div>
            
        <div class="ventana detector-asistencia visible" data-paso="2">
                <button class="boton-ventana-cerrar" data-paso="2">X</button>
                <?php include 'HuDi/detector-asistencia/asistencia.php'; ?>
        </div>
        <!-- <h1>Sistema de control de Asistencia</h1>
        <a href="APIEnviar.php">Enviar <- </a>
        <a href="APIRecibir.php">Recibir</a>
        <a href="APICambios.php">Actualizar</a> -->
        </div> 
    </div>
    <script src="public/build/js/ventana.js"></script>
</body>
</html>