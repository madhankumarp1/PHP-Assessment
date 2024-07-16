<?php
$servername = "localhost"; // Your database server
$username = "dckap";       // Your database username
$password = "Dckap2023Ecommerce"; // Your database password
$dbname = "user_registration"; // Your database name

try {
    $dsn = "mysql:host=$servername;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
