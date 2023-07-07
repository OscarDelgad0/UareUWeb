<?php

require 'includes/app.php';

use Controllers\ApiController;
use Model\Sensor;

$cambios = new Sensor($_POST);
$cambios->actualizar();

