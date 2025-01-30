const modalWindow = document.getElementById("modal");
const modalButton = document.querySelector(".modal_btn");
const closeButton = document.getElementById("close");

modalButton.onclick = () => {
    modalWindow.classList.remove("modal-dis_active");
    modalWindow.classList.add("modal-active");
};

closeButton.onclick = () => {
    modalWindow.classList.remove("modal-active");
    modalWindow.classList.add("modal-dis_active");
};

document.onclick =(e) => {
    if(!modalWindow.contains(e.target) && e.target != modalButton) {
        modalWindow.classList.remove("modal-active");
        modalWindow.classList.add("modal-dis_active");
    }
}
