<?php
// Подключение дополнительных файлов
require_once get_theme_file_path("assets/backend/verifications/helpers.php");

create_new_user_db($_POST["name"], $_POST["email"], $_POST["password"]);