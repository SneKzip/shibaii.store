<?php

add_action("wp_ajax_registration", "call_registration_script");
add_action("wp_ajax_nopriv_registration", "call_registration_script");

function call_registration_script(){
    require_once get_theme_file_path("assets/backend/verifications/registration.php");
    die();
}