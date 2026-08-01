const openButton = document.querySelector('.main-nav__button--open')
const menu = document.querySelector('.main-nav');

// Открытие меню

openButton.addEventListener('click', () => {
  menu.classList.toggle('main-nav--open');
});

// Воспроизведение музыки

const player = document.querySelector('.main-nav__player');
const musicButton = document.querySelector('.main-nav__button--music');
let isPlay = false;

musicButton.addEventListener('click', () => {
  if (!isPlay) {
    player.play();
    isPlay = true;
  } else {
    player.pause();
    isPlay = false;
  }
});
