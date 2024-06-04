<?php

if(!defined('ABSPATH')){
    exit;
}

// Подключение стилей и скриптов
add_action("wp_enqueue_scripts", "connecting_scripts_and_styles");
function connecting_scripts_and_styles(){
    wp_enqueue_style( 'shibaii-store', get_stylesheet_uri() );
	wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/dist/main.js', array(), "1.0.0", true);
    wp_localize_script( 'main', 'ajax',
        [
            'url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ajax-nonce')
        ]
    );
}

// ACF
require_once get_theme_file_path("assets/api/ACF/read.php");

// Хук на AJAX запрос регистрации
require_once get_theme_file_path("assets/api/requests/registration.php");