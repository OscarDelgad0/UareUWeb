<?php
    namespace Model;

    class Cambios extends ActiveRecord {
        protected static $tabla = 'cambios';
        protected static $columnasDB = ['id', 'date_actualizacion_now', 'time_actualizacion_now', 'date_actualizacion_past', 'time_actualizacion_past', 'actualizacion'];

        public $id;
        public $date_actualizacion_now;
        public $time_actualizacion_now;
        public $date_actualizacion_past;
        public $time_actualizacion_past;
        public $actualizacion;


        public function __construct($args = []){
            $this->id = $args['id'] ?? null;
            $this->date_actualizacion_now = $args['date_actualizacion_now'] ?? ''; 
            $this->time_actualizacion_now = $args['time_actualizacion_now'] ?? ''; 
            $this->date_actualizacion_past = $args['date_actualizacion_past'] ?? ''; 
            $this->time_actualizacion_past = $args['time_actualizacion_past'] ?? ''; 
            $this->actualizacion = $args['actualizacion'] ?? ''; 

        }
    }