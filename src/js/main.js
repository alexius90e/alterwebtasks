import Swiper from 'swiper/bundle';

const baseClass = '.first-screen__';

new Swiper(`${baseClass}swiper`, {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: `${baseClass}navigation-next`,
    prevEl: `${baseClass}navigation-prev`,
  },
  pagination: {
    el: `${baseClass}pagination`,
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});
