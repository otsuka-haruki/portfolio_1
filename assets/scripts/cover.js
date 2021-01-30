'use strict';
export function coverAnimation() {
  const windowWidth = document.body.clientWidth;
  let bar;
  if (windowWidth > 860) {
    bar = new ProgressBar.Line('#cover__progress-bar-container', {
      strokeWidth: .8,
      easing: 'easeIn',
      color: '#d2b071',
      trailColor: '#eee',
      trailWidth: .3,
      svgStyle: {
        width: '100%',
      },
      text: {
        style: {
          color: '#fff',
          padding: 0,
          margin: 0,
        },
        autoStyleContainer: false
      },
      from: {
        color: '#f48fb1'
      },
      to: {
        color: '#d2b071'
      },
      step: (state, bar) => {
        bar.setText(`${Math.round(bar.value() * 100)} %`);
        bar.path.setAttribute('stroke', state.color);
      }
    });
  } else {
    bar = new ProgressBar.Line('#cover__progress-bar-container', {
      strokeWidth: 2,
      easing: 'easeIn',
      color: '#d2b071',
      trailColor: '#eee',
      trailWidth: .3,
      svgStyle: {
        width: '100%',
      },
      text: {
        style: {
          color: '#fff',
          padding: 0,
          margin: 0,
        },
        autoStyleContainer: false
      },
      from: {
        color: '#f48fb1'
      },
      to: {
        color: '#d2b071'
      },
      step: (state, bar) => {
        bar.setText(`${Math.round(bar.value() * 100)} %`);
        bar.path.setAttribute('stroke', state.color);
      }
    });
  }
  bar.animate(1);

  const coverElement = document.getElementById('cover');
  const coverPhrase = coverElement.querySelector('p');
  const progressbarContainer = document.getElementById('cover__progress-bar-container');
  const welcomeSVG = document.getElementById('welcome-svg');
  coverPhrase.textContent = 'LOADING...';

  window.onload = function() {
    setTimeout(() => {
      progressbarContainer.classList.add('fade-out');
    }, 1000);

    setTimeout(() => {
      progressbarContainer.remove();
      welcomeSVG.classList.remove('hide');
      new Vivus('welcome-svg', {
        type: 'delayed',
        duration: 100,
        animTimingFunction: Vivus.EASE_IN,
      });
    }, 1700);

    setTimeout(() => {
      coverElement.classList.add('bounce-up');
    }, 4000);
  }
}
