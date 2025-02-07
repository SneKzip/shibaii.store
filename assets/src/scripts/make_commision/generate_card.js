import * as counter from "./counter";
import * as select_option from "./select_option";

let card_container = document.getElementById("card-container");
let card_counter = 0;

add_card();

export function add_card(){
    let card = get_card_layout();
    card_container.insertAdjacentHTML("beforeend", card);
    counter.counter_functions(card_counter);
    select_option.set_order_position(card_counter);
}

function get_card_layout(){
    card_counter += 1;
    let card = 
    `<div class="commission_card" id = "card_id-${card_counter}">
        <div class="button_delete_wrapper">
            <button class="delete_card">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M7 17L16.8995 7.10051" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
        </div>
        <div class="commission_card-header">
            <h3 class = "header-title" id = "title_id-${card_counter}">Выберите товар</h3>
        </div>
        <div class="commission_card-main">
            <select id = "select_id-${card_counter}">
                <option disabled selected>Список услуг</option>
                <optgroup label="Chibi">
                    <option value="Chibi Halfobdy">Halfbody</option>
                    <option value="Chibi Fullbody">Fullbody</option>
                </optgroup>
                <optgroup label="Illustration">
                    <option value="Illustration Headbody">Headbody</option>
                    <option value="Illustration Halfbody">Halfbody</option>
                    <option value="Illustration Fullbody">Fullbody</option>
                </optgroup>
                <optgroup label="2D Models">
                    <option value="2D Models Fullbody">Fullbody</option>
                </optgroup>
            </select>
            <div class="main-counter" id = "main-counter-${card_counter}">
                <div class="number-left">
                    <button id = "minus-counter-${card_counter}">-</button>
                </div>
                <div data-value class = "number-quantity" id = "counter-${card_counter}">
                    
                </div>
                <div class="number-right">
                    <button id = "plus-counter-${card_counter}">+</button>
                </div>
            </div>
        </div>
    </div>`

    return card;
}