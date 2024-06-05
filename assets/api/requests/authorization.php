<?php

add_action("wp_ajax_authorization", "call_authorization_script");
add_action("wp_ajax_nopriv_authorization", "call_authorization_script");

function call_authorization_script(){
    require_once get_theme_file_path("assets/backend/verifications/authorization.php");
    die();
}