'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// STEP: Open Modal Function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
// STEP: Close Modal Function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// STEP: Close Modal Event by clicking close button
btnCloseModal.addEventListener('click', closeModal);
// STEP: Close Modal Event by clicking overlay
overlay.addEventListener('click', closeModal);
// STEP: Close Modal Event using ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
