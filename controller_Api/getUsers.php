<?php

header('Content-Type: application/json');

require_once('../model/dbconfig.php');

try {
    $stmt = $pdo->prepare("SELECT * FROM users");
    $stmt->execute();

    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $response = [
        'users' => $users,
        'totalUsers' => count($users)
    ];


    echo json_encode($response);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
