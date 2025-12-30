function abrirTela(id) {
  document.querySelectorAll('.screen').forEach(tela => {
    tela.classList.remove('active');
  });

  const alvo = document.getElementById(id);
  if (alvo) {
    alvo.classList.add('active');
    window.scrollTo(0, 0);
  }
}

function voltarMenu() {
  abrirTela('menu');
}
