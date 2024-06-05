<?php
/*
Template Name: Шаблон страницы Price/Service
*/
session_start();
get_header();
?>
<div class="content-price">
    <?php 
        require_once get_theme_file_path("assets/api/user/verification.php");
        if(verification_status()){
            ?> 
            <a href = "<?php echo get_page_link(151); ?>" class = "button">Make Commision</a>
            <?php
        }
        else{
            ?> 
            <a href = "<?php echo get_page_link(146); ?>" class = "button">Make Commision</a>
            <?php
        }
    ?>
                    <div class = "hr"></div>
                    <h2 class = "text-prices"><?php echo get_field("name_page"); ?></h2>
                    <span class = "warning"><?php echo get_field("signature"); ?></span>
                    <div class = "services">
                        <a href="<?php echo get_page_link(28); ?>" class = "button">Chibi</a>
                        <a href="<?php echo get_page_link(31); ?>" class = "button">Illustration</a>
                        <a href="<?php echo get_page_link(33); ?>" class = "button">2D Models</a>
                    </div>
                    <div class = "hr"></div>
                </div>
<?php get_footer(); ?>