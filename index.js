'use strict';

import {
  coverAnimation
} from  './assets/scripts/cover.js';
 import {
   progressCircle
 } from './assets/scripts/libraries/progress-circle.js';
 import {
   scrollBehavior
 } from './assets/scripts/scroll.js';

class App {
  constructor() {
    coverAnimation();
    progressCircle();
    scrollBehavior();
  }
}

new App();

// test below
