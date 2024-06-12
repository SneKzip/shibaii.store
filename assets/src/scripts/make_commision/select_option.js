import * as cart from "./generate_cart";

export function set_order_position(card_counter){
    let counter_container = document.querySelector(`#counter-${card_counter}`);
    let header_title = document.querySelector(`#title_id-${card_counter}`);
    let service_list = document.querySelector(`#select_id-${card_counter}`)

    service_list.addEventListener("change", () => {
        let changed_option = service_list.options[service_list.selectedIndex];
        change_header(header_title, changed_option.value);
        let order_quantity = show_counter(card_counter, counter_container);
        cart.set_cart(changed_option.value, order_quantity, card_counter);
    });
}

function change_header(header_title, header_value){
    header_title.textContent = header_value;
}

function show_counter(card_counter, counter_container){
    let counter = document.getElementById(`main-counter-${card_counter}`);

    counter.style.display = "flex";

    return get_counter_number(counter_container);
}

function get_counter_number(counter){
    let order_quantity = counter.getAttribute("data-value");

    return order_quantity;
}