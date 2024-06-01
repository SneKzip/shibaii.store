<?php

if(!defined('ABSPATH')){
    exit;
}

// Подключение стилей и скриптов
add_action("wp_enqueue_scripts", "connecting_scripts_and_styles");
function connecting_scripts_and_styles(){
    wp_enqueue_style( 'shibaii-store', get_stylesheet_uri() );
	wp_enqueue_script( 'shibaii-store', get_template_directory_uri() . '/assets/dist/main.js', array(), "1.0.0", true);
}

// Хук init ACF
add_action('acf/init', 'my_acf_init');
function my_acf_init() {
    get_footer_link_data();
    get_chibi_data();
    get_illustration_data();
    get_models_data();
}

// Получение данных из админки с полей ACF (ссылки)
function get_footer_link_data(){
    global $footer_links;
    $footer_links = 
    [
        "vk_link" => get_field("link_vk", 16),
        "tg_link" => get_field("link_tg", 16)
    ];
}

// Получение данных из админки с полей ACF (чиби)
function get_chibi_data(){
    global $chibi_data;
    $chibi_data = [
        "title" => get_field("name_page", 28),
        "status" => get_field("status", 28),
        "halfbody_price" => get_field("halfbody_price", 28),
        "fullbody_price" => get_field("fullbody_price", 28)
    ];
}

// Получение данных из админки с полей ACF (иллюстрации)
function get_illustration_data(){
    global $illustration_data;
    $illustration_data = [
        "title" => get_field("name_page", 31),
        "status" => get_field("status", 31),
        "headbody_price" => get_field("headbody_price", 31),
        "halfbody_price" => get_field("halfbody_price", 31),
        "fullbody_price" => get_field("fullbody_price", 31)
    ];
}

// Получение данных из админки с полей ACF (модели)
function get_models_data(){
    global $models_data;
    $models_data = [
        "title" => get_field("name_page", 33),
        "status" => get_field("status", 33),
        "fullbody_price" => get_field("fullbody_price", 33)
    ];
}