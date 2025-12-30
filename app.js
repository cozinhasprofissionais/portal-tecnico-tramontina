document.addEventListener("DOMContentLoaded", () => {
  inserirLogo();
});

function inserirLogo() {
  const topo = document.getElementById("topo");
  if (!topo) return;

  const logo = document.createElement("img");
  logo.src = "ativos/logo-tramontina.png";
  logo.alt = "Tramontina";
  logo.className = "logo";

  topo.prepend(logo);
}

function abrirTela(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (id === "limpeza" || id === "manutencao") {
    carregarVideos(id);
  }

  window.scrollTo(0, 0);
}

function voltarMenu() {
  abrirTela("menu");
}

function carregarVideos(tipo) {
  const area = document.querySelector(`#${tipo} .conteudo`);
  if (!area || !videos[tipo]) return;

  area.innerHTML = "";

  videos[tipo].forEach(v => {
    const a = document.createElement("a");
    a.href = v.link;
    a.target = "_blank";
    a.className = "btn primary";
    a.textContent = v.titulo;
    area.appendChild(a);
  });
}
