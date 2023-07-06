<?php
    namespace Model;

    class Asistencia extends ActiveRecord {
        protected static $tabla = 'asistencia';
        protected static $columnasDB = ['id', 'id_empleado'];
        public $id;
        public $id_empleado;

        public function __construct($args = []){
            $this->id = $args['id'] ?? null;
            $this->id_empleado = $args['id_empleado'] ?? null;
        }

        public static function ultimo(){
            $query = "SELECT nombre, verificada, id  FROM empleados WHERE id = ( SELECT id_empleado FROM asistencia ORDER BY id DESC LIMIT 1)";
            $resultado = self::consultarSQL($query);
            return $resultado;
        }
    }