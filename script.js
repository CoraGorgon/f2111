const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', () => {
  surpriseMessage.classList.toggle('show');
  surpriseBtn.textContent = surpriseMessage.classList.contains('show')
    ? 'Una última cosa: te quiero 💗'
    : 'Presiona aquí para una sorpresa ✨';
  if (surpriseMessage.classList.contains('show')) burstHearts();
});

function burstHearts() {
  const layer = document.querySelector('.floating-hearts');
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart-particle';
    heart.textContent = Math.random() > .5 ? '♥' : '♡';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    layer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
}
