<?php
    namespace Model;

    class Asistencia extends ActiveRecord {
        protected static $tabla = 'asistencia';
        protected static $columnasDB = ['id', 'id_empleado', 'fecha_asistencia', 'hora_asistencia'];
        public $id;
        public $id_empleado;
        public $fecha_asistencia;
        public $hora_asistencia;

        public function __construct($args = []){
            $this->id = $args['id'] ?? null;
            $this->id_empleado = $args['id_empleado'] ?? null;
            $this->fecha_asistencia = $args['fecha_asistencia'] ?? null;
            $this->hora_asistencia = $args['hora_asistencia'] ?? null;
        }

        public static function ultimoRegistro(){
            $query = "SELECT * FROM asistencia ORDER BY id DESC LIMIT 1";
            $resultado = self::consultarSQL($query);
            return $resultado;
        }

        public static function getId(){

            return $this->id_empleado;
        }
    }