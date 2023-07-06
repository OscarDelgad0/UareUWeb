<?php
    require './vendor/autoload.php';
    require 'database.php';
    require 'funciones.php';

    use Model\ActiveRecord;
    ActiveRecord::setDB($db);