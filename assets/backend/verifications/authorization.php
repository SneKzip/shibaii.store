<?php

require_once get_theme_file_path("assets/backend/verifications/helpers.php");

check_user_data_db($_POST["email"], $_POST["password"]);