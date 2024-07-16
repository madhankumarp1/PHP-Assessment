<?php

require("../model/dbconfig.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password
    $imageFile = $_FILES['imageFile'];

    if (empty($email) || empty($password) || empty($imageFile)) {
        echo json_encode(['message' => 'All fields are required']);
        exit;
    }

    $targetDir = "../uploads/";
    if (!is_dir($targetDir)) {
        mkdir($targetDir, 0755, true);
    }
    $targetFile = $targetDir . basename($imageFile["name"]);
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    $allowedTypes = ['jpg', 'jpeg', 'png'];
    if (!in_array($imageFileType, $allowedTypes)) {
        echo json_encode(['message' => 'Invalid file type']);
        exit;
    }

    if ($imageFile["error"] !== UPLOAD_ERR_OK) {
        echo json_encode(['message' => 'File upload error: ' . $imageFile["error"]]);
        exit;
    }


    if (move_uploaded_file($imageFile["tmp_name"], $targetFile)) {
     
        try {
            $stmt = $pdo->prepare("INSERT INTO users (email, password, imageFile) VALUES (?, ?, ?)");
            if ($stmt->execute([$email, $password, $targetFile])) {
                echo json_encode([
                    'message' => 'User registered successfully',
                    // 'user' => [
                    //     'email' => $email,
                    //     'imageFile' => $targetFile
                    // ]
                ]);
            } else {
                echo json_encode(['message' => 'Database error: ' . $stmt->errorInfo()[2]]);
            }
        } catch (PDOException $e) {
            echo json_encode(['message' => 'Database error: ' . $e->getMessage()]);
        }
    } else {
        echo json_encode(['message' => 'File upload failed']);
    }
}
?>
