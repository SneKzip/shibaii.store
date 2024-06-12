export function counter_functions(card_counter){
    let counter_container = document.querySelector(`#counter-${card_counter}`);
    let button_minus = document.querySelector(`#minus-counter-${card_counter}`);
    let button_plus = document.querySelector(`#plus-counter-${card_counter}`);
    let counter_data_value = counter_container.getAttribute("data-value");

    const base_counter = 1;

    if(counter_container){
        counter_data_value = base_counter;
        change_data_value();
        counter_container.textContent = counter_data_value;
    }

    if(button_minus && button_plus){
        
        button_minus.addEventListener("click", minus_counter);

        button_plus.addEventListener("click", plus_counter);
    }

    function minus_counter(){
        if(counter_data_value != 1){
            counter_data_value -= 1;
            change_data_value();
            change_quantity(card_counter);
            counter_container.textContent = counter_data_value;
        }
        else{
            counter_data_value = 1;
            counter_container.textContent = counter_data_value;
        }
    }
    
    function plus_counter(){
        counter_data_value += 1;
        change_data_value();
        change_quantity(card_counter);
        counter_container.textContent = counter_data_value;
    }

    function change_data_value(){
        counter_container.setAttribute("data-value", counter_data_value);
    }

    function change_quantity(card_counter){
        let data_value = document.getElementById(`counter-${card_counter}`).getAttribute("data-value");
        let quantity_container = document.getElementById(`quantity-${card_counter}`);
    
        quantity_container.textContent = data_value;
    }
}