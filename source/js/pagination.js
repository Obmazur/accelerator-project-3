let bulletElements;
const paginationElement = document.querySelector('.news__pagination');

const handleBulletClick = (evt) => {
  paginationElement.style.left = `-${((evt.target.dataset.id - 2) * 42)}px`;
  if (window.innerWidth >= 768) {
    paginationElement.style.left = `-${((evt.target.dataset.id - 2) * 52)}px`;
  }
};

const resetBullets = () => {
  paginationElement.style.left = 0;
};

const enableBullets = () => {
  bulletElements = document.querySelectorAll('.news__bullet');
  bulletElements.forEach((bullet, index) => {
    bullet.dataset.id = index;
    bullet.removeEventListener('click', handleBulletClick);
    bullet.removeEventListener('click', resetBullets);
    if (index >= 3 && index !== bulletElements.length - 1) {
      bullet.addEventListener('click', handleBulletClick);
    }
    if (index < 3) {
      bullet.addEventListener('click', resetBullets);
    }
  });
};

export {enableBullets};
