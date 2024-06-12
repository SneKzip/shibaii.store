<?php 
/*
Template Name: Шаблон страницы Оформление заказа
*/
get_header(); ?>

<div class="cart">
    <div class="cart_header">
        <div class="header-title">
            <span>Заказ</span>
        </div>
    </div>
    <div class="cart_main">
        <div class="table">
            <div class="column" id = "column_name">
                <div class="column-title">
                    Товар
                </div>
            </div>
            <div class="column" id = "column_quantity">
                <div class="column-title">
                    Количество
                </div>
            </div>
        </div>
    </div>
    <div class="cart_footer">
        <!-- <div class="footer-price">
            <span>Итоговая стоимость:</span>
            <span>15000</span>
            <span>руб.</span>
        </div> -->
        <div class="footer-submit">
            <button>
                <span class = "text">Заказать</span>
                <span class="icon"><svg class="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></span>
            </button>
        </div>
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