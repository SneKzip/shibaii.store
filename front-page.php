<?php 
/*
Template Name: Шаблон страницы Home
*/
get_header(); ?>
    <div class="content-home">
        <h1 class = "artist-name"><?php echo get_field("name_home"); ?></h1>
        <div class = "logo">
            <img src="<?php the_field('logo_home'); ?>">
        </div>
        <h2 class = "job-name"><?php echo get_field("work_home"); ?></h2>
    </div>
<?php get_footer(); ?>