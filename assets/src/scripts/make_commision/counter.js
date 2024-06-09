let counter_container = document.querySelector("#counter");
let button_minus = document.querySelector("#minus-counter");
let button_plus = document.querySelector("#plus-counter");

let counter = 1;

if(counter_container){
    counter_container.textContent = counter;
}

if(button_minus && button_plus){
    button_minus.addEventListener("click", minus_counter);

    button_plus.addEventListener("click", plus_counter);
}

function minus_counter(){
    if(counter != 1){
        counter -= 1;
    }
    else{
        counter = 1;
    }

    counter_container.textContent = counter;
}

function plus_counter(){
    counter += 1;

    counter_container.textContent = counter;
}