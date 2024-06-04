<?php 
/*
Template Name: Шаблон страницы Оформление заказа
*/
session_start();
get_header(); ?>
<?php 
echo $_SESSION["user"]["name"];
echo $_SESSION["user"]["id"];
echo $_SESSION["user"]["role"];
?>
<?php get_footer(); ?>