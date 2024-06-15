<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Incluir la configuración de la conexión a la base de datos SQLite
include 'conexion.php'; // Asegúrate de que este archivo incluya la conexión a la base de datos SQLite

try {
    // Consulta SQL para seleccionar todos los empleados
    $query = "SELECT * FROM empleados";
    $statement = $conex->prepare($query);
    $statement->execute();

    // Obtener los resultados de la consulta
    $empleados = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Devolver los empleados como JSON
    echo json_encode($empleados);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Error al obtener empleados: " . $e->getMessage()));
}
?>
