const body = document.getElementById('app');

const navigation = document.querySelector('.header__nav');

body.addEventListener('click', (event) => {
  if (event.target.classList.contains('header__burger')) {
    navigation.classList.toggle('nav_visible');
    return;
  }
  navigation.classList.remove('nav_visible');
});
