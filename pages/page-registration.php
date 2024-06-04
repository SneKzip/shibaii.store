<?php 
/*
Template Name: Шаблон страницы Регистрации
*/
get_header(); ?>

<div class = "content">
    <div class="header">
        <h2 class="header-title">
            Регистрация
        </h2>
        <span class="header-text_warning">
            Чтобы оформить заказ - пройдите регистрацию
        </span>
    </div>
    <div class="registration">
        <div class = "error-message_hide" id = "error">
            Ошибка, проверьте поля ввода
        </div>
        <form class = "form" id = "form-reg">
            <label>
                Имя пользователя
                <input id = "name" type="text" name = "name" placeholder = "ExampleName">
            </label>
            <label>
                Почта
                <input id = "email" type="email" name = "email" placeholder = "example@yandex.ru">
            </label>
            <div class="passwords">
                <label>
                    Пароль
                    <input id = "password" type="password" name = "password" placeholder = "********">
                </label>
                <label>
                    Подтверждение пароля
                    <input id = "confirm_password" name = "password_confirmation" type="password" placeholder = "********">
                </label>
            </div>
            <div class="alert">
                <span>Есть аккаунт? <a href="<?php echo get_page_link(146); ?>">Авторизоваться</a></span>
            </div>
            <div class="button-submit">
                <button type = "submit" id = "submit" class = "submit">Продолжить</button>
            </div>
        </form>
    </div>
</div>

<?php get_footer(); ?>