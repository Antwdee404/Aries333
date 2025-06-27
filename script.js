const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.getElementById('card');

noBtn.addEventListener('click', () => {
  card.innerHTML = `
    <div class="gif-container">
    <p class="response-text">Why:( </p>
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUya3VuczdsNmNlYWpyODN4YWFrMXRtMmQ1cmQwYjNhanY2Yzdja3hvMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sLkIthus9lEwoe7PRx/giphy.gif"
        alt="No gif"
      />
    </div>
  `;
});

yesBtn.addEventListener('click', () => {
  card.innerHTML = `
    <div class="gif-container">
      <p class="response-text">Let’s go!</p>
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyYjFicDE3YWp6cmRibmo0dHNueWQyYTFoYTRkODJnMm9meHBsbXYwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8e28G54wj0yiJw9rfQ/giphy.gif"
        alt="In Love Cat"
      />
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

