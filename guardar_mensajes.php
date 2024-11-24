<?php
// Configuración de la conexión a la base de datos
$host = "localhost";
$dbname = "mensajes_db";
$username = "root"; // Cambiar si tienes un usuario diferente
$password = ""; // Cambiar si tienes una contraseña configurada

// Conexión a la base de datos
$conn = new mysqli($host, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Verificar si el formulario fue enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $telefono = $conn->real_escape_string($_POST['telefono']);
    $correo = $conn->real_escape_string($_POST['correo']);
    $mensaje = $conn->real_escape_string($_POST['mensaje']);

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO mensajes (nombre, telefono, correo, mensaje) VALUES ('$nombre', '$telefono', '$correo', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo "Mensaje guardado correctamente.";
        header("Location: mensajes.html"); // Redirige a la página de mensajes
        exit();
    } else {
        echo "Error al guardar el mensaje: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>
