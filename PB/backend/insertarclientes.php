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
if (empty($data["nombre"]) || empty($data["direccion"]) || empty($data["correo"]) || empty($data["telefono"])) {
    http_response_code(400);
    echo json_encode(array("message" => "Faltan datos requeridos"));
    exit;
}

// Incluir archivo de conexión a la base de datos SQLite
include 'conexion.php';

// Preparar los datos del cliente
$cliente = [
    "nombre" => $data["nombre"],
    "direccion" => $data["direccion"],
    "correo" => $data["correo"],
    "telefono" => $data["telefono"]
];

try {
    // Preparar la consulta SQL
    $query = "INSERT INTO clientes (nombre, direccion, correo, telefono) VALUES (:nombre, :direccion, :correo, :telefono)";
    $statement = $conex->prepare($query);

    // Ejecutar la consulta con los datos del cliente
    $result = $statement->execute($cliente);

    if ($result) {
        http_response_code(200);
        echo json_encode(array("message" => "Cliente insertado correctamente"));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al insertar cliente"));
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Error en la base de datos: " . $e->getMessage()));
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Error en el servidor: " . $e->getMessage()));
}
?>
