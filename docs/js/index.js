const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const body = document.querySelector('body');
const header = document.querySelector('header');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
  body.classList.toggle('position--fixed');
  header.classList.toggle('header--opacity')
}

hamburger.addEventListener('click', handleClick)