<?php
  require '../controllers/ApiController.php';
  echo "Datos recibiendo";

  $input = file_get_contents('php://input');
  echo "Dato recibido: " . $input;

  echo "Recibiendoaa...";
    