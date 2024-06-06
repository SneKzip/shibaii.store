let exit_button = document.querySelector("#exit");
let logout_status = false;

// Запрос на сервер
async function ajax_request(user_data){
    let response = await fetch_request(ajax.url, user_data);
    if(response.redirected){
        document.location = response.url;
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
if(exit_button){
    exit_button.addEventListener("click", () => {
        let data = new FormData();
        data.append("logout_status", logout_status);
        data.append("action", "logout");
        data.append("nonce", ajax.nonce);
    
        ajax_request(data);
    });
}
