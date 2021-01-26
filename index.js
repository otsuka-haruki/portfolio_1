'use strict';

import {
  coverAnimation
} from  './assets/scripts/cover.js';
import * as DOMModificationFunctions from './assets/scripts/DOM_modifications.js';
 import {
   progressCircle
 } from './assets/scripts/libraries/progress-circle.js';
 import {
   scrollBehavior
 } from './assets/scripts/scroll.js';

class App {
  constructor() {
    coverAnimation();
    DOMModificationFunctions.modifyAboutLeftHeight();
    progressCircle();
    scrollBehavior();
  }
}

new App();

// test below
