import Swiper from 'swiper/bundle';

const baseClass = '.partners__';

new Swiper(`${baseClass}swiper`, {
  loop: true,
  spaceBetween: 50,
  breakpoints: {
    768: {
      autoHeight: false,
    },
  },
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
