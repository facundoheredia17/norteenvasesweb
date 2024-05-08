<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    // Aquí puedes realizar la lógica para enviar el correo o almacenar los datos en una base de datos

    // Redirigir a la página de agradecimiento después de enviar el correo
    header("Location: gracias.html");
    exit; // Importante: asegúrate de salir del script después de la redirección
}
?>

