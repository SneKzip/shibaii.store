const imageBlocks = document.querySelectorAll(".example");
const closeModal = document.querySelector(".close");
const modalWindow = document.querySelector(".modal-image");
const image = document.querySelector("#modalImage");
const modalWrapper = document.querySelector(".modal-container");


closeModal.addEventListener("click", (event) => {
    modalWindow.classList.remove("modal-active");
    modalWindow.classList.add("modal-remove");
});

imageBlocks.forEach(block => {
    block.addEventListener("click", (event) =>{
        image.src = block.children[0].src;
        if(block.id == "example-commisions"){
            modalWrapper.style.width = "1300px";
        }
        else{
            modalWrapper.style.width = "500px";
        }
        modalWindow.classList.remove("modal-remove");
        modalWindow.classList.add("modal-active");
    });
});