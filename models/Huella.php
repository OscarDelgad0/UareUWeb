<?php
    namespace Model;

    class Huella extends ActiveRecord {
        protected static $tabla = 'huella';
        protected static $columnasDB = ['id', 'id_empleado','templateHuellaString', 'verificado', 'fecha_creacion', 'hora_creacion'];

        public $id;
        public $id_empleado;
        public $verificado;
        public $templateHuellaString;
        public $fecha_creacion;
        public $hora_creacion;

        public function __construct($args = []){
            $this->id = $args['id'] ?? null;
            $this->id_empleado = $args['id_empleado'] ?? ''; 
            $this->templateHuellaString = $args['templateHuellaString'] ?? '';
            $this->verificado = $args['verificado'] ?? null;
            $this->fecha_creacion = $args['fecha_creacion'] ?? null;
            $this->hora_creacion = $args['hora_creacion'] ?? null;
        }

        public static function prueba(){
            echo 'huella';
        }

        public function existeUsuario(){
            $query = "SELECT * FROM " . self::$tabla . " WHERE templateHuellaString = '" . $this->templateHuella . "' LIMIT 1;";
            $resultado = self::$db->query($query);
            if($resultado->num_rows){
            }
            
            return $resultado;
        }

        public static function ultimo(){
            $query = "SELECT nombre, verificada, id  FROM empleados WHERE id = ( SELECT id_empleado FROM asistencia ORDER BY id DESC LIMIT 1)";
            $resultado = self::consultarSQL($query);
            return $resultado;
        }

        public static function ultimoRegistro(){
            $query = "SELECT a.id, a.fecha_asistencia, a.hora_asistencia, h.id_empleado, h.id, e.hora_entrada, e.nombre
            FROM asistencia a
            JOIN huella h ON a.id_empleado = h.id
            JOIN empleado e ON h.id_empleado = e.id
            WHERE a.id = (SELECT MAX(id) FROM asistencia);";
            $resultado = self::consultarSQL($query);
            return $resultado;
        }

    }