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

// Consultar los mensajes
$sql = "SELECT nombre, telefono, correo, mensaje, fecha FROM mensajes ORDER BY fecha DESC";
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['nombre']) . "</td>";
        echo "<td>" . htmlspecialchars($row['telefono']) . "</td>";
        echo "<td>" . htmlspecialchars($row['correo']) . "</td>";
        echo "<td>" . htmlspecialchars($row['mensaje']) . "</td>";
        echo "<td>" . htmlspecialchars($row['fecha']) . "</td>";
        echo "</tr>";
    }
} else {
    echo "<tr><td colspan='5'>No hay mensajes registrados.</td></tr>";
}

// Cerrar la conexión
$conn->close();
?>
