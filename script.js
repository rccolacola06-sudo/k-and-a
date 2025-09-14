// ACCESS CODE: "mayas"
(function(){
  const correct = "mayas";
  const overlay = document.getElementById('lock-overlay');
  const input = document.getElementById('code-input');
  const btn = document.getElementById('unlock-btn');
  const msg = document.getElementById('lock-msg');
  input.addEventListener('keydown', function(e){
    if (e.key === 'Enter') attemptUnlock();
  });
  btn.addEventListener('click', attemptUnlock);
  function attemptUnlock(){
    const val = (input.value||"").trim().toLowerCase();
    if(val === correct){
      try { sessionStorage.setItem('site_unlocked','1'); } catch(e){}
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden','true');
    } else {
      msg.textContent = 'Incorrect code. Try again.';
      input.value = '';
      input.focus();
    }
  }
  try {
    if(sessionStorage.getItem('site_unlocked') === '1'){
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden','true');
    }
  } catch(e){}
  try {
    document.getElementById('year').textContent = new Date().getFullYear();
  } catch(e){}
})();