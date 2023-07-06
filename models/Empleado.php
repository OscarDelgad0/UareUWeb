<?php
    namespace Model;

    class Empleado extends ActiveRecord {
        protected static $tabla = 'empleado';
        protected static $columnasDB = ['id', 'nombre','hora_entrada', 'id_huella'];

        public $id;
        public $nombre;
        public $id_huella;
        public $verificado;
        public $hora_entrada;

        public function __construct($args = []){
            $this->id = $args['id'] ?? null;
            $this->nombre = $args['nombre'] ?? ''; 
            $this->id_huella = $args['id_huella'] ?? ''; 
            $this->hora_entrada = $args['hora_entrada'] ?? null;
        }
    }