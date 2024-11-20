const burger = document.querySelector('.icon-burger');
const modal = document.querySelector('.modal-overlay');
const close = document.querySelector('.icon-close');
burger.addEventListener('click', event => {
  event.preventDefault();
  modal.classList.add('active');
  burger.removeEventListener();
});

close.addEventListener('click', () => {
  modal.classList.remove('active');
});
