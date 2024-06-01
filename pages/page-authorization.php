<?php 
/*
Template Name: Шаблон страницы Авторизации
*/
get_header(); ?>

<div class = "content">
    <div class="header">
        <h2 class="header-title">
            Авторизация
        </h2>
        <span class="header-text_warning">
            Чтобы оформить заказ - пройдите авторизацию
        </span>
    </div>
    <div class="registration">
        <div class="error-msg" id = "error">
            Ошибка, проверьте поля ввода
        </div>
        <form class = "form" id = "form-reg">
            <label>
                Почта
                <input id = "email" type="email" name = "user_email" placeholder = "example@yandex.ru">
            </label>
            <label>
                Пароль
                <input id = "password" type="password" name = "user_password" placeholder = "********">
            </label>
            <div class="alert">
                <span>Нет аккаунта? <a href="<?php echo get_page_link(140); ?>">Зарегистрироваться</a></span>
            </div>
            <div class="button-submit">
                <button type = "submit" id = "submit" class = "submit">Продолжить</button>
            </div>
            
        </form>
    </div>
</div>

<?php get_footer(); ?>