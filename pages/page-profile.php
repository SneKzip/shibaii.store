<?php 
/*
Template Name: Шаблон страницы Профиля
*/
get_header(); ?>

<h1 class = "artist-name">Привет, <?= $_SESSION["user"]["name"] ?></h1>
<h1 class = "artist-name">Твоя роль:  <?= $_SESSION["user"]["role"] ?></h1>

<button id = "exit">Выйти</button>

<?php get_footer(); ?>