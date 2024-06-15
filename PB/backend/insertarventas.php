<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    exit();
}

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

// Verificar si se recibieron datos JSON
$data = json_decode(file_get_contents("php://input"), true);

// Verificar si todos los campos requeridos están presentes
if (empty($data["fecha"]) || empty($data["total"])) {
    http_response_code(400);
    echo json_encode(array("message" => "Faltan datos requeridos"));
    exit;
}

// Incluir archivo de conexión a la base de datos SQLite
include 'conexion.php';

// Preparar los datos de la venta
$venta = [
    "fecha" => $data["fecha"],
    "total" => $data["total"]
];

try {
    // Preparar la consulta SQL
    $query = "INSERT INTO ventas (fecha, total) VALUES (:fecha, :total)";
    $statement = $conex->prepare($query);

    // Ejecutar la consulta con los datos de la venta
    $result = $statement->execute($venta);

    if ($result) {
        http_response_code(200);
        echo json_encode(array("message" => "Venta insertada correctamente"));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al insertar venta"));
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Error en la base de datos: " . $e->getMessage()));
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Error en el servidor: " . $e->getMessage()));
}
?>
