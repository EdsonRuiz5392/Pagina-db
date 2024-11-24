<?php
    include 'conexion.php';
    $nombre = "";
    $apellido = "";
    $tel = "";
    $correo = "";
    $mensaje = "";
    $crear_tabla = "CREATE TABLE IF NOT EXISTS tblcontact (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        apellido VARCHAR(50) NOT NULL,
        telefono VARCHAR(15) NOT NULL,
        correo VARCHAR(50) NOT NULL,
        mensaje TEXT NOT NULL
    )";
    $insertar = "INSERT INTO tblcontacto(nombre,tel,correo,mensaje) VALUES ('$nombre','$tel','$correo','$mensaje')";
    $verificar_correo = mysqli_query($conexion,"SELECT * FROM tblcontacto WHERE correo = '$correo'");
    if(mysqli_num_rows($verificar_correo) > 0) {        
        echo '<script>
                alert("The email already exists");
                window.history.go(-1);
              </script>';
              exit;
    }
    $resultado = mysqli_query($conexion,$insertar);
    if(!$resultado) {
        echo '<script>
                alert("Registration error");
                window.history.go(-1);                
              </script>';
    } else {
        echo '<script>
                alert("Registration completed correctly");
                window.history.go(-1);                
            </script>';  
    }