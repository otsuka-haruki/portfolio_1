'use strict';

import {
  coverAnimation
} from  './assets/scripts/cover.js';
 import {
   progressCircle
 } from './assets/scripts/libraries/progress-circle.js';

class App {
  constructor() {
    coverAnimation();
    progressCircle();
  }
}

new App();

// test below
