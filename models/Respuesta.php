<?php
    namespace Model;

    class Empleado extends ActiveRecord {

        protected static $tabla = 'estado';
        protected static $columnasDB = ['tiempo'];

        public $id;
        
        public function __construct($args = []){
            $this->id = $args['id'] ?? null;
        
        }
    }