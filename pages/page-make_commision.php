<?php 
/*
Template Name: Шаблон страницы Оформление заказа
*/
get_header(); ?>

<div class="make_commission">
    <div class="hr"></div>
    <div class="make_commission-header">
        <h2 class="header-title">MAKE COMMISSION</h2>
    </div>
    <div class="make_commission-main">
        <div class="commission_card">
            <div class="button_delete_wrapper">
                <button class="delete_card">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M7 17L16.8995 7.10051" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
            <div class="commission_card-header">
                <h3 class = "header-title">Выберите товар</h3>
            </div>
            <div class="commission_card-main">
                <select>
                    <option disabled selected>Список</option>
                    <optgroup label="Chibi">
                        <option value="c1">Halfboby</option>
                        <option value="c2">Fullbody</option>
                    </optgroup>
                    <optgroup label="Illustration">
                        <option value="s1">Headbody</option>
                        <option value="s2">Halfbody</option>
                        <option value="s3">Fullbody</option>
                    </optgroup>
                    <optgroup label="2D Models">
                        <option value="s1">Fullbody</option>
                    </optgroup>
                </select>
                <div class="main-counter">
                    <div class="number-left">
                        <button>-</button>
                    </div>
                    <div class="number-quantity">
                        1
                    </div>
                    <div class="number-right">
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="make_commission-footer">
        <button class="noselect add-card"><span class="text">Добавить</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span></button>
    </div>
    <div class="hr"></div>
</div>

<?php get_footer(); ?>