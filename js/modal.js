const modal = document.querySelector(".backdrop");
const modalBtnOpen1 = document.querySelector(".modal-btn-open-1");
const modalBtnOpen2 = document.querySelector(".modal-btn-open-2");
const modalBtnOpen3 = document.querySelector(".modal-btn-open-3");
const modalBtnOpen4 = document.querySelector(".modal-btn-open-4");
const modalBtnOpen5 = document.querySelector(".modal-btn-open-5");
const modalBtnOpen6 = document.querySelector(".modal-btn-open-6");
const modalBtnClose = document.querySelector(".modal__btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen1.addEventListener("click", toggleModal);
modalBtnOpen2.addEventListener("click", toggleModal);
modalBtnOpen3.addEventListener("click", toggleModal);
modalBtnOpen4.addEventListener("click", toggleModal);
modalBtnOpen5.addEventListener("click", toggleModal);
modalBtnOpen6.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
