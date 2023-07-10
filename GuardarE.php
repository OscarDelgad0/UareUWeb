<?php
    require 'includes/app.php';

    use Model\Huella;
    use Model\Empleado;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
            $empleado =  new Empleado($_POST);
            $empleado->guardar();
            header('Location: HuDi/control-asistencia/huella-dactilar.php');
        //    $cambios = new Huella($_POST);
}