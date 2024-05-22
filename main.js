onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // script.js
document.addEventListener("DOMContentLoaded", function() {
  const flower = document.getElementById('flower');
  const message = document.getElementById('message');

  // Supondo que você tenha alguma animação de flor aqui
  // Exibir a mensagem ao mesmo tempo
  flower.addEventListener('animationend', function() {
      message.style.display = 'block';
  });
});
