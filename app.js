function show(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

document.addEventListener('click', (e) => {
  const go = e.target.closest('[data-go]');
  if(go){ show(go.dataset.go); return; }

  const back = e.target.closest('[data-back]');
  if(back){ show('menu'); return; }
});
