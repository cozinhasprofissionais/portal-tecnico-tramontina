function abrirTela(id) {
  document.querySelectorAll('.screen').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  carregarConteudo(id);
  window.scrollTo(0, 0);
}

function voltarMenu() {
  abrirTela('menu');
}

function carregarConteudo(id) {
  const area = document.querySelector(`#${id} .conteudo`);
  if (!area || !dados[id]) return;

  area.innerHTML = "";

  const info = dados[id];

  if (Array.isArray(info)) {
    info.forEach(item => {
      const a = document.createElement("a");
      a.href = item.link;
      a.target = "_blank";
      a.className = "btn primary";
      a.textContent = item.titulo;
      area.appendChild(a);
    });
  } else {
    const a = document.createElement("a");
    a.href = info.link;
    a.target = "_blank";
    a.className = "btn primary";
    a.textContent = "Abrir";
    area.appendChild(a);
  }
}
