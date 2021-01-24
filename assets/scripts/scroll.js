'use strict';

export function scrollBehavior() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 280,
    easing: 'easeInOutQuart',
  });
}
