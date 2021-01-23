'use strict';
export function coverAnimation() {
  const coverElement = document.getElementById('cover');
  const coverPhrase = coverElement.querySelector('p');

  // const coverProgressBar = document.querySelector('#cover .determinate');
  coverPhrase.textContent = 'loading';

  setTimeout(() => {
    coverPhrase.textContent = 'loaded !';
  }, 2500);

  setTimeout(() => {
    coverElement.classList.add('upDisapper');
  }, 3500);
}
