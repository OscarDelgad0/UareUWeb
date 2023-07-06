<?php
    namespace Model;

    class Sensor extends ActiveRecord {
        protected static $tabla = 'sensor';
        protected static $columnasDB = ['id', 'serial_sensor','conectado', 'dedo_encima', 'ubicacion', 'plaza', 'status_asistencia', 'status_registro'];

        public $id;
        public $serial_sensor;
        public $dedo_encima;
        public $conectado;
        public $ubicacion;
        public $plaza;
        public $status_asistencia;
        public $status_registro;

        public function __construct($args = []){
            $this->id = $args['id'] ?? null;
            $this->serial_sensor = $args['serial_sensor'] ?? ''; 
            $this->conectado = $args['conectado'] ?? '';
            $this->dedo_encima = $args['dedo_encima'] ?? null;
            $this->ubicacion = $args['ubicacion'] ?? null;
            $this->plaza = $args['plaza'] ?? null;
            $this->status_asistencia = $args['status_asistencia'] ?? null;
            $this->status_registro = $args['status_registro'] ?? null;
        }
        
}