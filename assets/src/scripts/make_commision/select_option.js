import * as cart from "./generate_cart";

export function set_order_position(card_counter){
    let header_title = document.querySelector(`#title_id-${card_counter}`);
    let service_list = document.querySelector(`#select_id-${card_counter}`)

    service_list.addEventListener("change", () => {
        let changed_option = service_list.options[service_list.selectedIndex];
        change_header(header_title, changed_option.value);
        cart.set_cart(changed_option.value, "1", card_counter);
    });
}

function change_header(header_title, header_value){
    header_title.textContent = header_value;
}