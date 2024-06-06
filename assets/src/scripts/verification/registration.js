import * as user_get_set from "./user_data_get_set";
import * as form_validation from "./user_data_validation";

let form_reg = document.querySelector("#form-reg");
let error_block = document.querySelector("#error");
let counter = 0;

if(form_reg){
    form_reg.addEventListener("submit", (event) => {
        event.preventDefault();
    
        let user_data = user_get_set.get_form_data(form_reg, "registration");
    
        for(let [key, value] of form_validation.user_validation_status){
            if(value == true){
                counter++;
            }
            else{
                break;
            }
        }
    
        if(counter == 4){
            send_user_data_on_backend(user_data);
        }
    
        counter = 0;
    });
}


// Запрос на сервер
async function send_user_data_on_backend(user_data){
    let response = await fetch_request(ajax.url, user_data);
    if(response.redirected){
        console.log("редирект");
        document.location = response.url;
    }
    else if(response.ok){
        console.log("ответ пришел");
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