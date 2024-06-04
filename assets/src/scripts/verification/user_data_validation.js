export let user_validation_status = new Map();
let validation_message = "";

export function validation_user_name(name){
    if (name.length > 2 && name.trim().length > 0){
        user_validation_status.set("name", true);
        return true;
    }
    else{
        user_validation_status.set("name", false);
        return false;
    }
};

export function validation_user_email(email){
    const regexp = new RegExp("^.+@");
    if(regexp.test(email) == true){
        user_validation_status.set("email", true);
        return true;
    }
    else
    {
        user_validation_status.set("email", false);
        return false;
    }
};

export function validation_user_password(password){
    password = String(password);
    if (password.length >= 8){
        user_validation_status.set("password", true);
        return true;
    }
    else{
        user_validation_status.set("password", false);
        return false;
    }
};

export function validation_user_password_confirmation(password, password_confirmation){
    if(password == password_confirmation){
        user_validation_status.set("password_confirmation", true);
        return true;
    }
    else{
        user_validation_status.set("password_confirmation", false);
        return false;
    }
};

export function get_validation_user_status(){
    return user_validation_status;
}

export function set_validation_message(message){
    if(message){
        validation_message = message;
    }
    else{
        validation_message = "Ошибка, проверьте поля ввода";
    }
}

export function get_validation_message(){
    return validation_message;
}

// Убрать выделение поля с ошибкой
export function hide_error_message(field_error){
    field_error.classList.remove("error-border");
}

// Показать сообщение об ошибке и выделить какое-либо поле с ошибкой
export function show_error_message(message_object, field_error){
    message_object.textContent = get_validation_message();
    message_object.className = "error-message";
    field_error.classList.add("error-border");
}

export function show_error_message_block(message_object){
    message_object.textContent = get_validation_message();
    message_object.className = "error-message";
}