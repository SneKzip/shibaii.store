<?php 
/*
Template Name: Шаблон страницы Профиля
*/
get_header(); ?>

<div class="profile">
    <div class="left_column profile_content">
        <div class="card">
            <div class="card-border-top"></div>
            <div class="img">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 19.1115C5 16.6984 6.69732 14.643 9.00404 14.2627L9.21182 14.2284C11.0589 13.9239 12.9411 13.9239 14.7882 14.2284L14.996 14.2627C17.3027 14.643 19 16.6984 19 19.1115C19 20.1545 18.1815 21 17.1719 21H6.82813C5.81848 21 5 20.1545 5 19.1115Z" stroke="#363853" stroke-width="1.5"></path> <path d="M16.0834 6.9375C16.0834 9.11212 14.2552 10.875 12.0001 10.875C9.74492 10.875 7.91675 9.11212 7.91675 6.9375C7.91675 4.76288 9.74492 3 12.0001 3C14.2552 3 16.0834 4.76288 16.0834 6.9375Z" stroke="#3276c3" stroke-width="1.5"></path> </g></svg>
            </div>
            <p class="job"><?php echo $_SESSION["user"]["name"]?></p>
            <span><?php echo $_SESSION["user"]["role"]?></span>
        </div>
        <div class="additional_card">
            <button class="Btn setting"><div class="sign"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#ffffff"></path> </g></svg></div>
            </button>
            <button class="Btn" id = "logout" ><div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
            </button>
        </div>
    </div>
    <div class="right_column profile_content">
        <div class="order">
            <div class="order_header">
                <span class = "order_number">Заказ №1</span>
                <span class = "order_status">Статус: <span>принят</span></span>
            </div>
            <div class="order_content">
                <div class="order_content-header">
                    <span>Состав заказа:</span>
                </div>
                <div class="order_content-main">
                    <ul>
                        <li>Chibi Art (Fullbody) x3</li>
                        <li>Chibi Art (Headbody) x5</li>
                    </ul>
                </div>
                <div class="order_content-footer">
                    <span>Примерная сумма заказа: <span>26750</span> руб.</span>
                </div>
            </div>
            <div class="order_footer">
                <button class="noselect more-info"><span class="text">Открыть</span><span class="icon"><svg fill="#000000" width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M0 16q0.064 0.192 0.192 0.512t0.576 1.248 0.992 1.888 1.344 2.176 1.792 2.368 2.144 2.176 2.592 1.888 2.976 1.248 3.392 0.512q2.208 0 4.288-0.768t3.616-2.016 2.912-2.72 2.304-3.008 1.6-2.72 0.96-1.984l0.32-0.8q-0.064-0.16-0.192-0.48t-0.576-1.28-0.992-1.856-1.344-2.208-1.792-2.336-2.144-2.176-2.56-1.888-3.008-1.28-3.392-0.48q-2.208 0-4.288 0.768t-3.616 2.016-2.912 2.72-2.304 2.976-1.6 2.72-0.96 2.016zM6.016 16q0-2.72 1.344-5.024t3.616-3.616 5.024-1.344q2.048 0 3.872 0.8t3.2 2.112 2.144 3.2 0.8 3.872q0 2.72-1.344 5.024t-3.648 3.648-5.024 1.344q-2.016 0-3.872-0.8t-3.2-2.144-2.144-3.168-0.768-3.904zM10.016 16q0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256-1.76-4.224-4.256-1.76q-0.96 0-1.984 0.352v3.648h-3.648q-0.352 0.992-0.352 1.984z"></path></svg></span></button>
                <button class="noselect delete"><span class="text">Отменить</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>