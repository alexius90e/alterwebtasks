const body = document.getElementById('app');

[...document.querySelectorAll('.join')].forEach((button) =>
  button.addEventListener('click', () => {
    body.classList.add('modal_active');
  })
);

document.querySelector('.overlay').addEventListener('click', (event) => {
  if (event.target.classList.contains('overlay'))
    body.classList.remove('modal_active');
});

document.querySelector('.modal__form').addEventListener('submit', () => {
  const input = document.querySelector('.modal__input');
  if (Boolean(input.value)) body.classList.remove('modal_active');
  input.value = null;
});
