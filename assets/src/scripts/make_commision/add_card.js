import * as generate_card from "./generate_card";

let add_button = document.querySelector("#add-card");

if(add_button){
    add_button.addEventListener("click", () => {
        generate_card.add_card();
    });
}