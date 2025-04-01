<?php
include 'includes/conexao.php';

$token = $_GET['token'] ?? '';

$stmt = $conn->prepare("UPDATE usuarios 
    SET confirmado = TRUE, token_confirmacao = NULL 
    WHERE token_confirmacao = ?");
$stmt->execute([$token]);

if ($stmt->rowCount() > 0) {
    echo "E-mail confirmado com sucesso!";
} else {
    echo "Token inválido ou expirado";
}
?>