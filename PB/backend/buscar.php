<?php
// Verificar si la solicitud es de tipo OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *'); // Cambia esto según tu configuración de frontend
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Methods: DELETE, OPTIONS');
    exit();
}

// Headers CORS para respuestas normales
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: DELETE');

try {
    // Conectar a la base de datos SQLite
    $db = new PDO('sqlite:C:/xampp/htdocs/sqlite-pull/php/baseD.sqlite');

    // Verificar si la conexión fue exitosa
    if (!$db) {
        die("Error al conectar a la base de datos.");
    }

    // Obtener parámetros de la solicitud
    $tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';
    $query = isset($_GET['query']) ? $_GET['query'] : '';

    // Preparar y ejecutar la consulta según el tipo
    switch ($tipo) {
        case 'cliente':
            $stmt = $db->prepare("SELECT * FROM clientes WHERE nombre LIKE :query");
            break;
        case 'empleado':
            $stmt = $db->prepare("SELECT * FROM empleados WHERE nombre LIKE :query");
            break;
        case 'producto':
            $stmt = $db->prepare("SELECT * FROM productos WHERE id = :query");
            break;
        case 'venta':
            $stmt = $db->prepare("SELECT * FROM ventas WHERE id = :query");
            break;
        default:
            echo json_encode(null);
            exit();
    }

    // Ejecutar la consulta
    $stmt->execute([':query' => ($tipo == 'producto' || $tipo == 'venta') ? $query : "%$query%"]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolver los resultados en formato JSON
    echo json_encode($result ? $result : null);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
    exit();
}
?>
