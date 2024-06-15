<?php
$nombre_fichero = './baseD.sqlite3'; 

try {
    $conex = new PDO("sqlite:" . $nombre_fichero);
    $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Manejo de errores
    http_response_code(500);
    echo json_encode(array("message" => "Error en la conexión a la base de datos: " . $e->getMessage()));
    exit();
}
?>