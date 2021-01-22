'use strict';
export function coverAnimation() {
  const coverElement = document.getElementById('cover');
  const coverPhrase = coverElement.querySelector('p');

  const coverProgressBar = document.querySelector('#cover .determinate');
  let i = 0;
  const coverProgressBarInterval = setInterval(() => {
    i++;
    coverPhrase.textContent = `${i}%`;
    coverProgressBar.style.width = `${i}%`;
    if (i == 100) {
      clearInterval(coverProgressBarInterval);
      coverPhrase.textContent = 'loaded !'
      setTimeout(() => {
        coverElement.classList.add('upDisapper');
      }, 2000);
    }
  }, 25);
}
