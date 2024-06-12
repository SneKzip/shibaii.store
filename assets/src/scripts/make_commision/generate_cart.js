export function set_cart(item_name, item_quantity, counter){
    let response_name = item_name_generate(item_name, counter);
    let response_quantity = item_quantity_generate(item_quantity, counter);

    let item = document.getElementById(`name-${counter}`);
    let quantity = document.getElementById(`quantity-${counter}`);
    if(item && quantity){
        change_item(item, quantity, item_name, item_quantity);
    }
    else{
        get_item_on_cart(response_name, response_quantity);
    }
}

function item_name_generate(item_name, counter){
    let item = 
    `
    <div class="column-item" id = "name-${counter}">
        ${item_name}
    </div>
    `;

    return item;
}

function item_quantity_generate(item_quantity, counter){
    let item = 
    `
    <div class="column-item" id = "quantity-${counter}">
        ${item_quantity}
    </div>
    `;

    return item;
}

function get_item_on_cart(item_name, item_quantity){
    let column_name = document.querySelector("#column_name");
    let column_quantity = document.querySelector("#column_quantity");

    column_name.insertAdjacentHTML("beforeend", item_name);
    column_quantity.insertAdjacentHTML("beforeend", item_quantity);
}

function change_item(name_field, quantity_field, name, quantity){
    name_field.textContent = name;
    quantity_field.textContent = quantity; 
}

