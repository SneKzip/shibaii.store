import * as form_validation from "./user_data_validation";

let message_object = document.querySelector("#error");
let user_data = {};

// Получение данных с формы
export function get_form_data(form_object){    
    const formData = new FormData(form_object);
    formData.forEach((value_field, key) => {
        switch(key){
            case "name":
                set_user_name(value_field, key);
            break;
            case "email":
                set_user_email(value_field, key);
            break;
            case "password":
                set_user_password(value_field, key);
            break;
            case "password_confirmation":
                set_user_password_confirmation(value_field, key);
            break;
        }
    });
    return user_data;
};

// Сеттеры для данных пользователя
export function set_user_name(name, field_object){
    let result = form_validation.validation_user_name(name);

    if(result){
        form_validation.hide_error_message(document.getElementsByName(field_object)[0]);
        user_data["name"] = name;
    }
    else{
        form_validation.set_validation_message("Ошибка, минимальная длина имени 2 символа");
        form_validation.show_error_message(message_object, document.getElementsByName(field_object)[0]);
        delete user_data.name;
    }
};

export function set_user_email(email, field_object){
    let result = form_validation.validation_user_email(email);

    if(result == true){
        form_validation.hide_error_message(document.getElementsByName(field_object)[0]);
        user_data["email"] = email;
    }
    else{
        form_validation.set_validation_message("Ошибка, почтовый адрес неверный");
        form_validation.show_error_message(message_object, document.getElementsByName(field_object)[0]);
        delete user_data.email;
    }
};

export function set_user_password(password, field_object){
    let result = form_validation.validation_user_password(password);
    
    if(result){
        form_validation.hide_error_message(document.getElementsByName(field_object)[0]);
        user_data["password"] = password;
    }
    else{
        form_validation.set_validation_message("Ошибка, минимальная длина пароля 8 символов");
        form_validation.show_error_message(message_object, document.getElementsByName(field_object)[0]);
        delete user_data.password;
    }
};

export function set_user_password_confirmation(password_confirmation, field_object){
    let result = form_validation.validation_user_password_confirmation(get_user_password(), password_confirmation);
    
    if(result){
        form_validation.hide_error_message(document.getElementsByName(field_object)[0]);
        user_data["password_confirmation"] = password_confirmation;
    }
    else{
        form_validation.set_validation_message("Ошибка, пароли не совпадают");
        form_validation.show_error_message(message_object, document.getElementsByName(field_object)[0]);
        delete user_data.password;
    }
};

// Геттеры для данных пользователя
export function get_user_name(){
    return user_data["name"];
};

export function get_user_email(){
    return user_data["email"];
};

export function get_user_password(){
    return user_data["password"];
};

export function get_user_password_confirmation(){
    return user_data["password_confirmation"];
};