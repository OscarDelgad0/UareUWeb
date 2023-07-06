<?php include 'base/header.php' ?>
<h2>Sistema de control de asistencia</h2>

<div class="contenedor-grid">
        <div class="opciones-menu control-asistencia">
            <a href="control-asistencia/personal.php">
                <img src="../public/build/img/Personal.png" alt="">
                <p class="titulo-menu">Personal</p>
            </a>
            <a href="control-asistencia/asistencia.php">
                <img src="../public/build/img/reloj.png" alt="">
                <p class="titulo-menu">Asistencia</p>
            </a>
            <a href="control-asistencia/huella-dactilar.php">
                <img src="../public/build/img/huella-dactilar.png" alt="">
                <p class="titulo-menu">Huella dactilar</p>
            </a>
            <a href="control-asistencia/configurar.php">
                <img src="../public/build/img/configuraciones.png" alt="">
                <p class="titulo-menu">Configurar</p>
            </a>
        </div>
        <div class="opciones-menu dashboard">
            <p>Dashboard</p>
        </div>
</div>

<?php include 'base/footer.php' ?>