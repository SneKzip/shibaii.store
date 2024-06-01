<?php
// Подключение дополнительных файлов
require_once(get_template_directory_uri() . '/assets/backend/verifications/helpers.php');

$json = file_get_contents('php://input');
$user_data = json_decode($json);

create_new_user_db($user_data -> name, $user_data -> email, $user_data -> password);