const buttonElem = document.querySelector(".section_button");
const modalElem = document.querySelector(".modal");

modalElem.style.display = "none";

const openModal = () => {
  modalElem.style.display = "flex";
};

const closeModal = () => {
  modalElem.style.display = "none";
};

buttonElem.addEventListener("click", openModal);

modalElem.querySelector(".modal_close").addEventListener("click", closeModal);
