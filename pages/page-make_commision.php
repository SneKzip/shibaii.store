<?php 
/*
Template Name: Шаблон страницы Оформление заказа
*/
get_header(); ?>

<div class="cart">
    <div class="card_header">
        <div class="header-title">
            <span>Заказ</span>
        </div>
    </div>
    <div class="card_main">
        <span>Итоговая стоимость:</span>
    </div>
    <div class="card_footer">
        <button>Оформить</button>
    </div>
</div>

<div class="make_commission">
    <div class="hr"></div>
    <div class="make_commission-header">
        <h2 class="header-title">MAKE COMMISSION</h2>
    </div>
    <div class="make_commission-main" id = "card-container">
        
    </div>
    <div class="make_commission-footer">
        <button class="noselect add-card" id = "add-card"><span class="text">Добавить</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span></button>
    </div>
    <div class="hr"></div>
</div>

<?php get_footer(); ?>