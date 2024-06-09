export let card_container = document.getElementById("card-container");
export let card_counter = 0;

add_card();

export function add_card(){
    card_container.insertAdjacentHTML("beforeend", get_card_layout());
}

export function get_card_layout(){
    card_counter += 1;
    let card = 
    `<div class="commission_card" id = "card_id-${card_counter}">
        <div class="button_delete_wrapper">
            <button class="delete_card">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M7 17L16.8995 7.10051" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 7.00001L16.8995 16.8995" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
        </div>
        <div class="commission_card-header">
            <h3 class = "header-title">Выберите товар</h3>
        </div>
        <div class="commission_card-main">
            <select>
                <option disabled selected>Список услуг</option>
                <optgroup label="Chibi">
                    <option value="c1">Halfboby</option>
                    <option value="c2">Fullbody</option>
                </optgroup>
                <optgroup label="Illustration">
                    <option value="s1">Headbody</option>
                    <option value="s2">Halfbody</option>
                    <option value="s3">Fullbody</option>
                </optgroup>
                <optgroup label="2D Models">
                    <option value="s1">Fullbody</option>
                </optgroup>
            </select>
            <div class="main-counter">
                <div class="number-left">
                    <button id = "minus-counter">-</button>
                </div>
                <div class = "number-quantity" id = "counter">
                    1
                </div>
                <div class="number-right">
                    <button id = "plus-counter">+</button>
                </div>
            </div>
        </div>
    </div>`
    return card;
}