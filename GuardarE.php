<?php
    require 'includes/app.php';

    use Model\Huella;
    use Model\Empleado;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
            $empleado =  new Empleado($_POST);
            $empleado->guardar();
            header('Location: https://funerariaslatinoamericana.com/asistencia/registro_huella.php');
        //    $cambios = new Huella($_POST);
}