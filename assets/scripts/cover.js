'use strict';
export function coverAnimation() {
  const bar = new ProgressBar.Line('#cover', {
    strokeWidth: 2,
    easing: 'easeInOut',
    // duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
      width: '80%',
      // height: '10px'
    },
    text: {
      style: {
        color: '#999',
        position: 'absolute',
        left: '50%',
        top: '60%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        margin: 0,
      },
      autoStyleContainer: false
    },
    from: {
      color: '#81d4fa'
    },
    to: {
      color: '#ffcc80'
    },
    step: (state, bar) => {
      bar.setText(`${Math.round(bar.value() * 100)} %`);
      bar.path.setAttribute('stroke', state.color);
    }
  });
  bar.animate(1);


  const coverElement = document.getElementById('cover');
  const coverPhrase = coverElement.querySelector('p');
  const coverSVG = coverElement.querySelector('svg');
  coverPhrase.textContent = 'Getting ready...';

  setTimeout(() => {
    bar.destroy();
    coverPhrase.textContent = 'Welcome !';
  }, 2500);

  setTimeout(() => {
    coverElement.classList.add('bounce-up');
  }, 3500);

}
