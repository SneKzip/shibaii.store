export function counter_functions(card_counter){
    let counter_container = document.querySelector(`#counter-${card_counter}`);
    let button_minus = document.querySelector(`#minus-counter-${card_counter}`);
    let button_plus = document.querySelector(`#plus-counter-${card_counter}`);

    const base_counter = 1;

    if(counter_container){
        counter_container.textContent = base_counter;
    }

    if(button_minus && button_plus){
        
        button_minus.addEventListener("click", minus_counter);

        button_plus.addEventListener("click", plus_counter);
    }

    function minus_counter(){
        if(counter_container.textContent != 1){
            counter_container.textContent -= 1;
        }
        else{
            counter_container.textContent = 1;
        }
    }
    
    function plus_counter(){
        let quantity = parseInt(counter_container.textContent);
        quantity += 1;
        counter_container.textContent = quantity;
    }
}