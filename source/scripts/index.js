const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
    navToggle.classList.add('nav__toggle--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
    navToggle.classList.remove('nav__toggle--opened');
  }
});
