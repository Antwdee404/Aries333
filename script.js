const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.getElementById('card');

noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  noBtn.style.top = randY + 'px';
  noBtn.style.left = randX + 'px';
  noBtn.style.right = 'auto';
  noBtn.style.transform = 'none';

  // 🎉 Add wiggle animation
  noBtn.classList.add("no-animate");
  setTimeout(() => noBtn.classList.remove("no-animate"), 300);
});

yesBtn.addEventListener('click', () => {
  card.innerHTML = `
    <div class="gif-container">
      <p class="response-text">ILY!</p>
      <img src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyYjFicDE3YWp6cmRibmo0dHNueWQyYTFoYTRkODJnMm9meHBsbXYwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8e28G54wj0yiJw9rfQ/giphy.gif" alt="In Love Cat" />
    </div>
  `;
});
// ❤️ Falling Hearts Background Animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 2 + Math.random() * 3 + 's';
  document.getElementById('heart-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create a heart every 300ms
setInterval(createHeart, 300);

