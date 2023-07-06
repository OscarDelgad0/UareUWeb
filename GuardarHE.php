<?php
    require 'includes/app.php';

    use Model\Huella;
    use Model\Empleado;

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST["empleado"]["id"];
    $idHuella = $_POST["huella"]["id"];
            $huella = Huella::find($idHuella);
            $huella->id_empleado = $id; 
            $huella->actualizar();

            header('Location: HuDi/control-asistencia/huella-dactilar.php');
        //    $cambios = new Huella($_POST);
}