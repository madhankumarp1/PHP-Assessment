<?php

require("../model/dbconfig.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (empty($email) || empty($password)) {
        echo json_encode(['message' => 'Email and password are required']);
        exit;
    }

    try {
        //user from the database
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // Verify the password
            if (password_verify($password, $user['password'])) {
                echo json_encode([
                    'message' => 'Login successful',
                    // 'user' => [
                    //     'email' => $user['email'],
                    //     'imageFile' => $user['imageFile']
                    // ]
                ]);
            } else {
                echo json_encode(['message' => 'Invalid password']);
            }
        } else {
            echo json_encode(['message' => 'User not found']);
        }
    } catch (PDOException $e) {
        echo json_encode(['message' => 'Database error: ' . $e->getMessage()]);
    }
}
?>
