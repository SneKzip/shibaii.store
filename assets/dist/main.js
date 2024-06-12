/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/index.js":
/*!*****************************!*\
  !*** ./assets/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/contacts */ \"./assets/src/scripts/contacts.js\");\n/* harmony import */ var _scripts_contacts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_contacts__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_modalImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/modalImage */ \"./assets/src/scripts/modalImage.js\");\n/* harmony import */ var _scripts_modalImage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_modalImage__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_logout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/logout */ \"./assets/src/scripts/logout.js\");\n/* harmony import */ var _scripts_logout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_logout__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_verification_user_data_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/verification/user_data_validation */ \"./assets/src/scripts/verification/user_data_validation.js\");\n/* harmony import */ var _scripts_verification_user_data_get_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/verification/user_data_get_set */ \"./assets/src/scripts/verification/user_data_get_set.js\");\n/* harmony import */ var _scripts_verification_registration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/verification/registration */ \"./assets/src/scripts/verification/registration.js\");\n/* harmony import */ var _scripts_verification_authorization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/verification/authorization */ \"./assets/src/scripts/verification/authorization.js\");\n/* harmony import */ var _scripts_make_commision_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/make_commision/counter */ \"./assets/src/scripts/make_commision/counter.js\");\n/* harmony import */ var _scripts_make_commision_select_option__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/make_commision/select_option */ \"./assets/src/scripts/make_commision/select_option.js\");\n/* harmony import */ var _scripts_make_commision_generate_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/make_commision/generate_card */ \"./assets/src/scripts/make_commision/generate_card.js\");\n/* harmony import */ var _scripts_make_commision_add_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/make_commision/add_card */ \"./assets/src/scripts/make_commision/add_card.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shibaii/./assets/src/index.js?");

/***/ }),

/***/ "./assets/src/scripts/contacts.js":
/*!****************************************!*\
  !*** ./assets/src/scripts/contacts.js ***!
  \****************************************/
/***/ (() => {

eval("const contacts = document.querySelectorAll(\".contact\");\r\n\r\ncontacts.forEach(contact => {\r\n    contact.addEventListener(\"mouseover\", (event) => {\r\n        contact.children[0].classList.toggle(\"colorContact\");\r\n    });\r\n    contact.addEventListener(\"mouseout\", (event) => {\r\n        contact.children[0].classList.toggle(\"colorContact\");\r\n    });\r\n});\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/contacts.js?");

/***/ }),

/***/ "./assets/src/scripts/logout.js":
/*!**************************************!*\
  !*** ./assets/src/scripts/logout.js ***!
  \**************************************/
/***/ (() => {

eval("let exit_button = document.querySelector(\"#logout\");\r\nlet logout_status = false;\r\n\r\n// Запрос на сервер\r\nasync function ajax_request(user_data){\r\n    let response = await fetch_request(ajax.url, user_data);\r\n    if(response.redirected){\r\n        document.location = response.url;\r\n    }\r\n}\r\n\r\n// Fetch запрос JSON\r\nasync function fetch_request(url, json_data){\r\n    const response = await fetch(url, {\r\n        method: \"POST\",\r\n        body: json_data\r\n    });\r\n    return response;\r\n}\r\nif(exit_button){\r\n    exit_button.addEventListener(\"click\", () => {\r\n        let data = new FormData();\r\n        data.append(\"logout_status\", logout_status);\r\n        data.append(\"action\", \"logout\");\r\n        data.append(\"nonce\", ajax.nonce);\r\n    \r\n        ajax_request(data);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/logout.js?");

/***/ }),

/***/ "./assets/src/scripts/make_commision/add_card.js":
/*!*******************************************************!*\
  !*** ./assets/src/scripts/make_commision/add_card.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generate_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate_card */ \"./assets/src/scripts/make_commision/generate_card.js\");\n\r\n\r\nlet add_button = document.querySelector(\"#add-card\");\r\n\r\nif(add_button){\r\n    add_button.addEventListener(\"click\", () => {\r\n        _generate_card__WEBPACK_IMPORTED_MODULE_0__.add_card();\r\n    });\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/make_commision/add_card.js?");

/***/ }),

/***/ "./assets/src/scripts/make_commision/counter.js":
/*!******************************************************!*\
  !*** ./assets/src/scripts/make_commision/counter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   counter_functions: () => (/* binding */ counter_functions)\n/* harmony export */ });\nfunction counter_functions(card_counter){\r\n    let counter_container = document.querySelector(`#counter-${card_counter}`);\r\n    let button_minus = document.querySelector(`#minus-counter-${card_counter}`);\r\n    let button_plus = document.querySelector(`#plus-counter-${card_counter}`);\r\n    let counter_data_value = counter_container.getAttribute(\"data-value\");\r\n\r\n    const base_counter = 1;\r\n\r\n    if(counter_container){\r\n        counter_data_value = base_counter;\r\n        change_data_value();\r\n        counter_container.textContent = counter_data_value;\r\n    }\r\n\r\n    if(button_minus && button_plus){\r\n        \r\n        button_minus.addEventListener(\"click\", minus_counter);\r\n\r\n        button_plus.addEventListener(\"click\", plus_counter);\r\n    }\r\n\r\n    function minus_counter(){\r\n        if(counter_data_value != 1){\r\n            counter_data_value -= 1;\r\n            change_data_value();\r\n            change_quantity(card_counter);\r\n            counter_container.textContent = counter_data_value;\r\n        }\r\n        else{\r\n            counter_data_value = 1;\r\n            counter_container.textContent = counter_data_value;\r\n        }\r\n    }\r\n    \r\n    function plus_counter(){\r\n        counter_data_value += 1;\r\n        change_data_value();\r\n        change_quantity(card_counter);\r\n        counter_container.textContent = counter_data_value;\r\n    }\r\n\r\n    function change_data_value(){\r\n        counter_container.setAttribute(\"data-value\", counter_data_value);\r\n    }\r\n\r\n    function change_quantity(card_counter){\r\n        let data_value = document.getElementById(`counter-${card_counter}`).getAttribute(\"data-value\");\r\n        let quantity_container = document.getElementById(`quantity-${card_counter}`);\r\n    \r\n        quantity_container.textContent = data_value;\r\n    }\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/make_commision/counter.js?");

/***/ }),

/***/ "./assets/src/scripts/make_commision/generate_card.js":
/*!************************************************************!*\
  !*** ./assets/src/scripts/make_commision/generate_card.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add_card: () => (/* binding */ add_card)\n/* harmony export */ });\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ \"./assets/src/scripts/make_commision/counter.js\");\n/* harmony import */ var _select_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select_option */ \"./assets/src/scripts/make_commision/select_option.js\");\n\r\n\r\n\r\nlet card_container = document.getElementById(\"card-container\");\r\nlet card_counter = 0;\r\n\r\nadd_card();\r\n\r\nfunction add_card(){\r\n    let card = get_card_layout();\r\n    card_container.insertAdjacentHTML(\"beforeend\", card);\r\n    _counter__WEBPACK_IMPORTED_MODULE_0__.counter_functions(card_counter);\r\n    _select_option__WEBPACK_IMPORTED_MODULE_1__.set_order_position(card_counter);\r\n}\r\n\r\nfunction get_card_layout(){\r\n    card_counter += 1;\r\n    let card = \r\n    `<div class=\"commission_card\" id = \"card_id-${card_counter}\">\r\n        <div class=\"button_delete_wrapper\">\r\n            <button class=\"delete_card\">\r\n                <svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <rect width=\"24\" height=\"24\" fill=\"none\"></rect> <path d=\"M7 17L16.8995 7.10051\" stroke=\"#FFFFFF\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M7 7.00001L16.8995 16.8995\" stroke=\"#FFFFFF\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g></svg>\r\n            </button>\r\n        </div>\r\n        <div class=\"commission_card-header\">\r\n            <h3 class = \"header-title\" id = \"title_id-${card_counter}\">Выберите товар</h3>\r\n        </div>\r\n        <div class=\"commission_card-main\">\r\n            <select id = \"select_id-${card_counter}\">\r\n                <option disabled selected>Список услуг</option>\r\n                <optgroup label=\"Chibi\">\r\n                    <option value=\"Chibi Halfobdy\">Halfbody</option>\r\n                    <option value=\"Chibi Fullbody\">Fullbody</option>\r\n                </optgroup>\r\n                <optgroup label=\"Illustration\">\r\n                    <option value=\"Illustration Headbody\">Headbody</option>\r\n                    <option value=\"Illustration Halfbody\">Halfbody</option>\r\n                    <option value=\"Illustration Fullbody\">Fullbody</option>\r\n                </optgroup>\r\n                <optgroup label=\"2D Models\">\r\n                    <option value=\"2D Models Fullbody\">Fullbody</option>\r\n                </optgroup>\r\n            </select>\r\n            <div class=\"main-counter\" id = \"main-counter-${card_counter}\">\r\n                <div class=\"number-left\">\r\n                    <button id = \"minus-counter-${card_counter}\">-</button>\r\n                </div>\r\n                <div data-value class = \"number-quantity\" id = \"counter-${card_counter}\">\r\n                    \r\n                </div>\r\n                <div class=\"number-right\">\r\n                    <button id = \"plus-counter-${card_counter}\">+</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>`\r\n\r\n    return card;\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/make_commision/generate_card.js?");

/***/ }),

/***/ "./assets/src/scripts/make_commision/generate_cart.js":
/*!************************************************************!*\
  !*** ./assets/src/scripts/make_commision/generate_cart.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   set_cart: () => (/* binding */ set_cart)\n/* harmony export */ });\nfunction set_cart(item_name, item_quantity, counter){\r\n    let response_name = item_name_generate(item_name, counter);\r\n    let response_quantity = item_quantity_generate(item_quantity, counter);\r\n\r\n    let item = document.getElementById(`name-${counter}`);\r\n    let quantity = document.getElementById(`quantity-${counter}`);\r\n    if(item && quantity){\r\n        change_item(item, quantity, item_name, item_quantity);\r\n    }\r\n    else{\r\n        get_item_on_cart(response_name, response_quantity);\r\n    }\r\n}\r\n\r\nfunction item_name_generate(item_name, counter){\r\n    let item = \r\n    `\r\n    <div class=\"column-item\" id = \"name-${counter}\">\r\n        ${item_name}\r\n    </div>\r\n    `;\r\n\r\n    return item;\r\n}\r\n\r\nfunction item_quantity_generate(item_quantity, counter){\r\n    let item = \r\n    `\r\n    <div class=\"column-item\" id = \"quantity-${counter}\">\r\n        ${item_quantity}\r\n    </div>\r\n    `;\r\n\r\n    return item;\r\n}\r\n\r\nfunction get_item_on_cart(item_name, item_quantity){\r\n    let column_name = document.querySelector(\"#column_name\");\r\n    let column_quantity = document.querySelector(\"#column_quantity\");\r\n\r\n    column_name.insertAdjacentHTML(\"beforeend\", item_name);\r\n    column_quantity.insertAdjacentHTML(\"beforeend\", item_quantity);\r\n}\r\n\r\nfunction change_item(name_field, quantity_field, name, quantity){\r\n    name_field.textContent = name;\r\n    quantity_field.textContent = quantity; \r\n}\r\n\r\n\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/make_commision/generate_cart.js?");

/***/ }),

/***/ "./assets/src/scripts/make_commision/select_option.js":
/*!************************************************************!*\
  !*** ./assets/src/scripts/make_commision/select_option.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   set_order_position: () => (/* binding */ set_order_position)\n/* harmony export */ });\n/* harmony import */ var _generate_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate_cart */ \"./assets/src/scripts/make_commision/generate_cart.js\");\n\r\n\r\nfunction set_order_position(card_counter){\r\n    let counter_container = document.querySelector(`#counter-${card_counter}`);\r\n    let header_title = document.querySelector(`#title_id-${card_counter}`);\r\n    let service_list = document.querySelector(`#select_id-${card_counter}`)\r\n\r\n    service_list.addEventListener(\"change\", () => {\r\n        let changed_option = service_list.options[service_list.selectedIndex];\r\n        change_header(header_title, changed_option.value);\r\n        let order_quantity = show_counter(card_counter, counter_container);\r\n        _generate_cart__WEBPACK_IMPORTED_MODULE_0__.set_cart(changed_option.value, order_quantity, card_counter);\r\n    });\r\n}\r\n\r\nfunction change_header(header_title, header_value){\r\n    header_title.textContent = header_value;\r\n}\r\n\r\nfunction show_counter(card_counter, counter_container){\r\n    let counter = document.getElementById(`main-counter-${card_counter}`);\r\n\r\n    counter.style.display = \"flex\";\r\n\r\n    return get_counter_number(counter_container);\r\n}\r\n\r\nfunction get_counter_number(counter){\r\n    let order_quantity = counter.getAttribute(\"data-value\");\r\n\r\n    return order_quantity;\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/make_commision/select_option.js?");

/***/ }),

/***/ "./assets/src/scripts/modalImage.js":
/*!******************************************!*\
  !*** ./assets/src/scripts/modalImage.js ***!
  \******************************************/
/***/ (() => {

eval("const imageBlocks = document.querySelectorAll(\".example\");\r\nconst closeModal = document.querySelector(\".close\");\r\nconst modalWindow = document.querySelector(\".modal-image\");\r\nconst image = document.querySelector(\"#modalImage\");\r\nconst modalWrapper = document.querySelector(\".modal-container\");\r\n\r\n\r\ncloseModal.addEventListener(\"click\", (event) => {\r\n    modalWindow.classList.remove(\"modal-active\");\r\n    modalWindow.classList.add(\"modal-remove\");\r\n});\r\n\r\nimageBlocks.forEach(block => {\r\n    block.addEventListener(\"click\", (event) =>{\r\n        image.src = block.children[0].src;\r\n        if(block.id == \"example-commisions\"){\r\n            modalWrapper.style.width = \"1300px\";\r\n        }\r\n        else{\r\n            modalWrapper.style.width = \"500px\";\r\n        }\r\n        modalWindow.classList.remove(\"modal-remove\");\r\n        modalWindow.classList.add(\"modal-active\");\r\n    });\r\n});\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/modalImage.js?");

/***/ }),

/***/ "./assets/src/scripts/verification/authorization.js":
/*!**********************************************************!*\
  !*** ./assets/src/scripts/verification/authorization.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_data_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_data_get_set */ \"./assets/src/scripts/verification/user_data_get_set.js\");\n/* harmony import */ var _user_data_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_data_validation */ \"./assets/src/scripts/verification/user_data_validation.js\");\n\r\n\r\n\r\n// Переменные\r\nlet form_auth = document.querySelector(\"#form-auth\");\r\nlet error_block = document.querySelector(\"#error\");\r\nlet counter = 0;\r\n\r\n// Получение данных с формы авторизации\r\nfunction get_user_data(){    \r\n    let user_data = _user_data_get_set__WEBPACK_IMPORTED_MODULE_0__.get_form_data(form_auth, \"authorization\");\r\n    \r\n    for(let [key, value] of _user_data_validation__WEBPACK_IMPORTED_MODULE_1__.user_validation_status){\r\n        if(value == true){\r\n            counter++;\r\n        }\r\n        else{\r\n            break;\r\n        }\r\n    }\r\n\r\n    if(counter == 2){\r\n        ajax_request(user_data);\r\n    }\r\n\r\n    counter = 0;\r\n};\r\n\r\n// Запрос на сервер\r\nasync function ajax_request(user_data){\r\n    let response = await fetch_request(ajax.url, user_data);\r\n    if(response.redirected){\r\n        document.location = response.url;\r\n    }\r\n    else if(response.ok){\r\n        const promise = await response.text();\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_1__.set_validation_message(promise);\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_1__.show_error_message_block(error_block);\r\n    }\r\n}\r\n\r\n// Fetch запрос JSON\r\nasync function fetch_request(url, json_data){\r\n    const response = await fetch(url, {\r\n        method: \"POST\",\r\n        body: json_data\r\n    });\r\n    return response;\r\n}\r\n\r\n// Отправка запроса на сервер\r\nif(form_auth){\r\n    form_auth.addEventListener(\"submit\", (event) => {\r\n        event.preventDefault();\r\n        get_user_data();\r\n    });\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/verification/authorization.js?");

/***/ }),

/***/ "./assets/src/scripts/verification/registration.js":
/*!*********************************************************!*\
  !*** ./assets/src/scripts/verification/registration.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_data_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_data_get_set */ \"./assets/src/scripts/verification/user_data_get_set.js\");\n/* harmony import */ var _user_data_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_data_validation */ \"./assets/src/scripts/verification/user_data_validation.js\");\n\r\n\r\n\r\nlet form_reg = document.querySelector(\"#form-reg\");\r\nlet error_block = document.querySelector(\"#error\");\r\nlet counter = 0;\r\n\r\nif(form_reg){\r\n    form_reg.addEventListener(\"submit\", (event) => {\r\n        event.preventDefault();\r\n    \r\n        let user_data = _user_data_get_set__WEBPACK_IMPORTED_MODULE_0__.get_form_data(form_reg, \"registration\");\r\n    \r\n        for(let [key, value] of _user_data_validation__WEBPACK_IMPORTED_MODULE_1__.user_validation_status){\r\n            if(value == true){\r\n                counter++;\r\n            }\r\n            else{\r\n                break;\r\n            }\r\n        }\r\n    \r\n        if(counter == 4){\r\n            send_user_data_on_backend(user_data);\r\n        }\r\n    \r\n        counter = 0;\r\n    });\r\n}\r\n\r\n\r\n// Запрос на сервер\r\nasync function send_user_data_on_backend(user_data){\r\n    let response = await fetch_request(ajax.url, user_data);\r\n    if(response.redirected){\r\n        console.log(\"редирект\");\r\n        document.location = response.url;\r\n    }\r\n    else if(response.ok){\r\n        console.log(\"ответ пришел\");\r\n        const promise = await response.text();\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_1__.set_validation_message(promise);\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_1__.show_error_message_block(error_block);\r\n    }\r\n}\r\n\r\n// Fetch запрос JSON\r\nasync function fetch_request(url, json_data){\r\n    const response = await fetch(url, {\r\n        method: \"POST\",\r\n        body: json_data\r\n    });\r\n    return response;\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/verification/registration.js?");

/***/ }),

/***/ "./assets/src/scripts/verification/user_data_get_set.js":
/*!**************************************************************!*\
  !*** ./assets/src/scripts/verification/user_data_get_set.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get_form_data: () => (/* binding */ get_form_data),\n/* harmony export */   get_user_email: () => (/* binding */ get_user_email),\n/* harmony export */   get_user_name: () => (/* binding */ get_user_name),\n/* harmony export */   get_user_password: () => (/* binding */ get_user_password),\n/* harmony export */   get_user_password_confirmation: () => (/* binding */ get_user_password_confirmation)\n/* harmony export */ });\n/* harmony import */ var _user_data_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_data_validation */ \"./assets/src/scripts/verification/user_data_validation.js\");\n\r\n\r\nlet message_object = document.querySelector(\"#error\");\r\nlet user_data = new FormData();\r\n\r\n// Получение данных с формы\r\nfunction get_form_data(form_object, action_name){    \r\n    const formData = new FormData(form_object);\r\n\r\n    formData.append(\"nonce\", ajax.nonce);\r\n    formData.append(\"action\", action_name);\r\n\r\n    formData.forEach((value_field, key) => {\r\n        switch(key){\r\n            case \"name\":\r\n                set_user_name(value_field, key);\r\n            break;\r\n            case \"email\":\r\n                set_user_email(value_field, key);\r\n            break;\r\n            case \"password\":\r\n                set_user_password(value_field, key);\r\n            break;\r\n            case \"password_confirmation\":\r\n                set_user_password_confirmation(value_field, key);\r\n            break;\r\n            case \"action\":\r\n                set_ajax_action(value_field);\r\n            break;\r\n            case \"nonce\":\r\n                set_ajax_nonce(ajax.nonce);\r\n            break;\r\n        }\r\n    });\r\n\r\n    return user_data;\r\n};\r\n\r\n// Сеттеры для данных пользователя\r\nfunction set_user_name(name, field_object){\r\n    let result = _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.validation_user_name(name);\r\n\r\n    if(result){\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.hide_error_message(document.getElementsByName(field_object)[0]);\r\n        user_data.append(\"name\", name);\r\n    }\r\n    else{\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.set_validation_message(\"Ошибка, минимальная длина имени 2 символа\");\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.show_error_message(message_object, document.getElementsByName(field_object)[0]);\r\n        user_data.delete(\"name\");\r\n    }\r\n};\r\n\r\nfunction set_user_email(email, field_object){\r\n    let result = _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.validation_user_email(email);\r\n\r\n    if(result == true){\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.hide_error_message(document.getElementsByName(field_object)[0]);\r\n        user_data.append(\"email\", email);\r\n    }\r\n    else{\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.set_validation_message(\"Ошибка, почтовый адрес невалидный\");\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.show_error_message(message_object, document.getElementsByName(field_object)[0]);\r\n        user_data.delete(\"email\");\r\n    }\r\n};\r\n\r\nfunction set_user_password(password, field_object){\r\n    let result = _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.validation_user_password(password);\r\n    \r\n    if(result){\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.hide_error_message(document.getElementsByName(field_object)[0]);\r\n        user_data.append(\"password\", password);\r\n    }\r\n    else{\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.set_validation_message(\"Ошибка, минимальная длина пароля 8 символов\");\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.show_error_message(message_object, document.getElementsByName(field_object)[0]);\r\n        user_data.delete(\"password\");\r\n    }\r\n};\r\n\r\nfunction set_user_password_confirmation(password_confirmation, field_object){\r\n    let result = _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.validation_user_password_confirmation(get_user_password(), password_confirmation);\r\n    \r\n    if(result){\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.hide_error_message(document.getElementsByName(field_object)[0]);\r\n        user_data.append(\"password_confirmation\", password_confirmation);\r\n    }\r\n    else{\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.set_validation_message(\"Ошибка, пароли не совпадают\");\r\n        _user_data_validation__WEBPACK_IMPORTED_MODULE_0__.show_error_message(message_object, document.getElementsByName(field_object)[0]);\r\n        user_data.delete(\"password_confirmation\");\r\n    }\r\n};\r\n\r\n// Геттеры для данных пользователя\r\nfunction get_user_name(){\r\n    return user_data.get(\"name\");\r\n};\r\n\r\nfunction get_user_email(){\r\n    return user_data.get(\"email\");\r\n};\r\n\r\nfunction get_user_password(){\r\n    return user_data.get(\"password\");\r\n};\r\n\r\nfunction get_user_password_confirmation(){\r\n    return user_data.get(\"password_confirmation\");\r\n};\r\n\r\n// Сеттеры для AJAX запроса\r\nfunction set_ajax_action(action_name){\r\n    user_data.append(\"action\", action_name);\r\n}\r\n\r\nfunction set_ajax_nonce(nonce_value){\r\n    user_data.append(\"nonce\", nonce_value);\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/verification/user_data_get_set.js?");

/***/ }),

/***/ "./assets/src/scripts/verification/user_data_validation.js":
/*!*****************************************************************!*\
  !*** ./assets/src/scripts/verification/user_data_validation.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   get_validation_message: () => (/* binding */ get_validation_message),\n/* harmony export */   get_validation_user_status: () => (/* binding */ get_validation_user_status),\n/* harmony export */   hide_error_message: () => (/* binding */ hide_error_message),\n/* harmony export */   set_validation_message: () => (/* binding */ set_validation_message),\n/* harmony export */   show_error_message: () => (/* binding */ show_error_message),\n/* harmony export */   show_error_message_block: () => (/* binding */ show_error_message_block),\n/* harmony export */   user_validation_status: () => (/* binding */ user_validation_status),\n/* harmony export */   validation_user_email: () => (/* binding */ validation_user_email),\n/* harmony export */   validation_user_name: () => (/* binding */ validation_user_name),\n/* harmony export */   validation_user_password: () => (/* binding */ validation_user_password),\n/* harmony export */   validation_user_password_confirmation: () => (/* binding */ validation_user_password_confirmation)\n/* harmony export */ });\nlet user_validation_status = new Map();\r\nlet validation_message = \"\";\r\n\r\nfunction validation_user_name(name){\r\n    if (name.length > 2 && name.trim().length > 0){\r\n        user_validation_status.set(\"name\", true);\r\n        return true;\r\n    }\r\n    else{\r\n        user_validation_status.set(\"name\", false);\r\n        return false;\r\n    }\r\n};\r\n\r\nfunction validation_user_email(email){\r\n    const regexp = new RegExp(\"^.+@\");\r\n    if(regexp.test(email) == true){\r\n        user_validation_status.set(\"email\", true);\r\n        return true;\r\n    }\r\n    else\r\n    {\r\n        user_validation_status.set(\"email\", false);\r\n        return false;\r\n    }\r\n};\r\n\r\nfunction validation_user_password(password){\r\n    password = String(password);\r\n    if (password.length >= 8){\r\n        user_validation_status.set(\"password\", true);\r\n        return true;\r\n    }\r\n    else{\r\n        user_validation_status.set(\"password\", false);\r\n        return false;\r\n    }\r\n};\r\n\r\nfunction validation_user_password_confirmation(password, password_confirmation){\r\n    if(password == password_confirmation){\r\n        user_validation_status.set(\"password_confirmation\", true);\r\n        return true;\r\n    }\r\n    else{\r\n        user_validation_status.set(\"password_confirmation\", false);\r\n        return false;\r\n    }\r\n};\r\n\r\nfunction get_validation_user_status(){\r\n    return user_validation_status;\r\n}\r\n\r\nfunction set_validation_message(message){\r\n    if(message){\r\n        validation_message = message;\r\n    }\r\n    else{\r\n        validation_message = \"Ошибка, проверьте поля ввода\";\r\n    }\r\n}\r\n\r\nfunction get_validation_message(){\r\n    return validation_message;\r\n}\r\n\r\n// Убрать выделение поля с ошибкой\r\nfunction hide_error_message(field_error){\r\n    field_error.classList.remove(\"error-border\");\r\n}\r\n\r\n// Показать сообщение об ошибке и выделить какое-либо поле с ошибкой\r\nfunction show_error_message(message_object, field_error){\r\n    message_object.textContent = get_validation_message();\r\n    message_object.className = \"error-message\";\r\n    field_error.classList.add(\"error-border\");\r\n}\r\n\r\nfunction show_error_message_block(message_object){\r\n    message_object.textContent = get_validation_message();\r\n    message_object.className = \"error-message\";\r\n}\n\n//# sourceURL=webpack://shibaii/./assets/src/scripts/verification/user_data_validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/index.js");
/******/ 	
/******/ })()
;