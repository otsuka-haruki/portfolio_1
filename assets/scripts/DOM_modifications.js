export function modifyAboutLeftHeight() {
  const windowWidth = document.body.clientWidth;
  if (windowWidth > 860) {
    const aboutSection = document.getElementById('about');
    const aboutLeft = document.getElementById('about__left');
    const aboutBanner = document.getElementById('about__banner');
    const idealHeight = +aboutSection.clientHeight - +aboutBanner.clientHeight;
    aboutLeft.style.height = `${idealHeight}px`;
  }
}
