<?php

add_action("wp_ajax_logout", "call_logout_script");
add_action("wp_ajax_nopriv_logout", "call_logout_script");

function call_logout_script(){
    require_once get_theme_file_path("assets/api/user/logout.php");
    die();
}