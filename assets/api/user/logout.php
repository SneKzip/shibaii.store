<?php
require_once get_theme_file_path("assets/backend/verifications/helpers.php");

$_SESSION = [];
setcookie("token","",time() - 2629743, "/");
redirect(get_permalink(16));