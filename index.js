'use strict';

 import {
   progressCircle
 } from './assets/scripts/libraries/progress-circle.js';

class App {
  constructor() {
    progressCircle();
  }
}

new App();

// test below

const coverElement = document.getElementById('cover');
setTimeout(() => {
  coverElement.classList.add('upDisapper');
}, 1200);
