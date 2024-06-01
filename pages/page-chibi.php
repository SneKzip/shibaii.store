<?php 
/*
Template Name: Шаблон страницы Чибиков
*/
get_header(); ?>

<!-- РАЗДЕЛ С ЦЕНАМИ ЧИБИКОВ -->
<div class="content-price_chibies" id = "content-chibies" >
                    <div class="hr hr-top"></div>
                    <h2 class = "text-chibies"><?php echo $GLOBALS['chibi_data']['title'] ?></h2>
                    <?php
                        if(!$GLOBALS['chibi_data']['status']){
                            echo "<h2 class = 'status close'>CLOSE</h2>";
                        }
                        else{
                            echo "<h2 class = 'status open'>OPEN</h2>";
                        }
                    ?>
                        <div class="content-chibies">
                            <div class="price-table">
                                <div class="column">
                                    <div class="picture-format-name">
                                        <span>Halfbody</span>
                                    </div>
                                    <div class="picture-format-price">
                                        <span><?php echo $GLOBALS['chibi_data']['halfbody_price'] ?></span>
                                        <span>р.</span>
                                    </div>
                                </div>
                                <div class="hr hr-table"></div>
                                <div class="column">
                                    <div class="picture-format-name">
                                        <span>Fullbody</span>
                                    </div>
                                    <div class="picture-format-price">
                                        <span><?php echo $GLOBALS['chibi_data']['fullbody_price'] ?></span>
                                        <span>р.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="examples">
                                <div class="examples-title">
                                    <h2>EXAMPLES</h2>
                                </div>
                                <div class="examples-pictures">
                                    <div class="examples-table">
                                        <?php
                                            $posts = get_posts( array(
                                                'numberposts' => -1,
                                                'category_name'    => "chibi",
                                                'orderby'     => 'date',
                                                'order'       => 'ASC',
                                                'include'     => array(),
                                                'exclude'     => array(),
                                                'meta_key'    => '',
                                                'meta_value'  =>'',
                                                'post_type'   => 'post',
                                                'suppress_filters' => true,
                                            ) );

                                            foreach( $posts as $post ){
                                                setup_postdata( $post );
                                                ?>
                                                <div class="example"><img src="<?php the_field('chibi_example'); ?>"></div>
                                                <?php
                                                }
                                                
                                                wp_reset_postdata();
                                                ?>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="hr hr-bot"></div>
                </div>

<?php get_footer(); ?>