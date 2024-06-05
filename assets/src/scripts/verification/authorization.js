import * as user_get_set from "./user_data_get_set";
import * as form_validation from "./user_data_validation";

// Переменные
let form_auth = document.querySelector("#form-reg");
let error_block = document.querySelector("#error");
let counter = 0;

// Получение данных с формы авторизации
function get_user_data(){    
    let user_data = user_get_set.get_form_data(form_auth, "authorization");
    
    for(let [key, value] of form_validation.user_validation_status){
        if(value == true){
            counter++;
        }
        else{
            break;
        }
    }

    if(counter == 2){
        ajax_request(user_data);
    }

    counter = 0;
};

// Запрос на сервер
async function ajax_request(user_data){
    let response = await fetch_request(ajax.url, user_data);
    if(response.redirected){
        document.location = response.url;
    }
    else if(response.ok){
        const promise = await response.text();
        form_validation.set_validation_message(promise);
        form_validation.show_error_message_block(error_block);
    }
}

// Fetch запрос JSON
async function fetch_request(url, json_data){
    const response = await fetch(url, {
        method: "POST",
        body: json_data
    });
    return response;
}

// Отправка запроса на сервер
form_auth.addEventListener("submit", (event) => {
    event.preventDefault();
    get_user_data();
});
