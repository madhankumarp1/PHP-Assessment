<?php
require("../model/dbconfig.php");

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    $input = json_decode(file_get_contents('php://input'), true);
    $userId = isset($input['userId']) ? $input['userId'] : null;

    if (empty($userId)) {
        http_response_code(400);
        echo json_encode(['message' => 'User ID is required']);
        exit;
    }

    try {

        $stmt_check = $pdo->prepare("SELECT * FROM users WHERE id = ?");
        $stmt_check->execute([$userId]);
        $user = $stmt_check->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            http_response_code(404);
            echo json_encode(['message' => 'User not found']);
            exit;
        }


        $stmt_delete = $pdo->prepare("DELETE FROM users WHERE id = ?");
        if ($stmt_delete->execute([$userId])) {
            echo json_encode(['message' => 'User deleted successfully']);
        } else {
            http_response_code(500); 
            echo json_encode(['message' => 'Failed to delete user']);
        }
    } catch (PDOException $e) {
        http_response_code(500); 
        echo json_encode(['message' => 'Database error: ' . $e->getMessage()]);
    }
}
else {
    echo json_encode(['message' => 'Invalid request method']);
}
