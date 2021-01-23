'use strict';
export function coverAnimation() {
  const coverElement = document.getElementById('cover');
  const coverPhrase = coverElement.querySelector('p');
  coverPhrase.textContent = 'loading...';

  setTimeout(() => {
    coverPhrase.textContent = 'loaded !';
  }, 2500);

  setTimeout(() => {
    coverElement.classList.add('bounce-up');
  }, 3500);
}
