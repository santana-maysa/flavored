const carrossel = document.querySelector('.carrossel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const scrollPerClick = 220;

prev.addEventListener('click', () => {
  carrossel.scrollBy({
    top: 0,
    left: -scrollPerClick,
    behavior: 'smooth'
  });
});

next.addEventListener('click', () => {
  carrossel.scrollBy({
    top: 0,
    left: scrollPerClick,
    behavior: 'smooth'
  });
});
