const contacts = document.querySelectorAll(".contact");

contacts.forEach(contact => {
    contact.addEventListener("mouseover", (event) => {
        contact.children[0].classList.toggle("colorContact");
    });
    contact.addEventListener("mouseout", (event) => {
        contact.children[0].classList.toggle("colorContact");
    });
});