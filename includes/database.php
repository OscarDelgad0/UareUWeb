<?php

$db = mysqli_connect('162.240.209.186', 'wwfune_adminasistencia', 'xj4llnofa9x1', 'wwfune_asistencia', 3306);


if (!$db) {
    echo "Error: No se pudo conectar a MySQL.";
    echo "errno de depuración: " . mysqli_connect_errno();
    echo "error de depuración: " . mysqli_connect_error();
    exit;
}
