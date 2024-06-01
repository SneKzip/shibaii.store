import "./user_data_get_set";

// Объекты
let user = {};

// Переменные
let form_auth = document.querySelector("#form-reg");
let error_block = document.querySelector("#error");

// Состояния валидации
let email_validation = false;
let password_validation = false;

// Регулярные выражения
const regexp_email = new RegExp("^.+@");
const regexp_password = new RegExp("^([A-Z])([a-zA-Z0-9]+){8,}$");

// Получение данных с формы авторизации
function get_user_data(){    
    const formData = new FormData(form_auth);
    validation_user_data(formData);
};

// Валидация полученных данных с формы
function validation_user_data(formData){
    formData.forEach((value_field, key) => {
        switch(key){
            case "email":
                email_validation = regexp_check(value_field, regexp_email);
                set_user_email(value_field);
                break;
            case "password":
                password_validation = regexp_check(value_field, regexp_password);
                set_user_password(value_field);
                break;
        }
    });
}

// Проверка значения переменной на соответствие регулярному выражению
function regexp_check(field_value, regexp){
    if(regexp.test(field_value)){
        return true;
    }
    else{
        return false;
    }
}

// Вывод результата авторизации пользователю
function get_result_auth(message){
    error_block.style.display = "block";
    if(message){
        error_block.textContent = message;
    }
    else{
        error_block.textContent = "Ошибка, проверьте поля";
    }
}

// AJAX запрос на сервер
async function ajax_request(){
    let json_data = create_json();
    let response = await fetch_request("./backend/forms/auth.php", json_data);
    if(response.redirected){
        document.location = response.url;
    }
    else if(response.ok){
        const promise = await response.text();
        get_result_auth(promise);
    }
}

// Fetch запрос
async function fetch_request(url, json_data){
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: json_data
    });
    return response;
}

// Форматирование валидных данных в JSON
function create_json(){
    return JSON.stringify(user);
}

// Заполнение объекта user
function set_user_email(email){
    if(email_validation){
        user["email"] = email;
    }
}

function set_user_password(password){
    if(password_validation){
        user["password"] = password;
    }
}

// Отправка запроса на сервер
form_auth.addEventListener("submit", (event) => {
    event.preventDefault();
    get_user_data();
    if(email_validation && password_validation){
        ajax_request();
    }
    else{
        get_result_auth();
    }
});
