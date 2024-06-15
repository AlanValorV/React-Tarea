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
if (empty($data["nombre"]) || empty($data["apellido"]) || empty($data["puesto"]) || empty($data["salario"]) || empty($data["fecha"])) {
    http_response_code(400);
    echo json_encode(array("message" => "Faltan datos requeridos"));
    exit;
}

// Incluir archivo de conexión a la base de datos SQLite
include 'conexion.php';

// Preparar los datos del empleado
$empleado = [
    "nombre" => $data["nombre"],
    "apellido" => $data["apellido"],
    "puesto" => $data["puesto"],
    "salario" => $data["salario"],
    "fecha" => $data["fecha"]
];

try {
    // Preparar la consulta SQL
    $query = "INSERT INTO empleados (nombre, apellido, puesto, salario, fecha) VALUES (:nombre, :apellido, :puesto, :salario, :fecha)";
    $statement = $conex->prepare($query);

    // Ejecutar la consulta con los datos del empleado
    $result = $statement->execute($empleado);

    if ($result) {
        http_response_code(200);
        echo json_encode(array("message" => "Empleado insertado correctamente"));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Error al insertar empleado"));
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Error en la base de datos: " . $e->getMessage()));
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array("message" => "Error en el servidor: " . $e->getMessage()));
}
?>
