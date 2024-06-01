<?php

// Подключение дополнительных файлов
require_once(get_template_directory_uri() . '/assets/backend/verifications/helpers.php');

// Авторизация
$json = file_get_contents('php://input');
$user_data = json_decode($json);

check_user_data_db($user_data -> email, $user_data -> password);