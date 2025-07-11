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

function verificarHorario() {
  const agora = new Date();
  const hora = agora.getHours();
  const status = document.getElementById('status-cafe');

  if (hora >= 8 && hora < 19) {
    status.textContent = "Estamos abertos agora! Venha nos visitar.";
    status.style.color = "green";
  } else {
    status.textContent = "Estamos fechados no momento. Horário: 08h - 19h";
    status.style.color = "red";
  }
}

verificarHorario();

const btnTopo = document.querySelector('.btn-topo');
window.addEventListener('scroll', () => {
  btnTopo.classList.toggle('show', window.scrollY > 300);
});
