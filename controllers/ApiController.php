<?php

    namespace Controllers;

    use Model\Huella;
    use Model\Cambios;
    use Model\Asistencia;
    use Model\Empleado;
    use Model\Sensor;

    class ApiController {
    
        public static function enviarHuellas(){
          $huellas = Huella::all();
            if($huellas){
                echo json_encode($huellas);
            }else {
                echo "Hubo un error..";
            }
        }
        public static function enviarEmpleados(){
          $empleados = Empleado::all();
            if($empleados){
                echo json_encode($empleados);
            }else {
                echo "Hubo un error..";
            }
        }

        public static function enviarSensores(){
            $sensores = Sensor::all();
            if($sensores){
                echo json_encode($sensores);

            }else {
                echo "Hubo un error..";
            }
        }

        public static function traerRegistro(){
            $registro = Huella::ultimoRegistro();
            if($registro){
                echo json_encode($registro);

            }else {
                echo "Hubo un error..";
            }
        }
    }