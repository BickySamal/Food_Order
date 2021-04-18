const close = document.querySelector('.close');
const modal = document.querySelector('.modal-fade');

close.addEventListener('click', () => {
  modal.classList.add('hidden');
});
