<?php

require 'includes/app.php';

use Controllers\ApiController;
use Model\Cambios;

$cambios = new Cambios($_POST);
$cambios->actualizar();

