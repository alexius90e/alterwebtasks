import Swiper from 'swiper/bundle';

const baseClass = '.instagram__';

new Swiper(`${baseClass}swiper`, {
  loop: true,
  spaceBetween: 32,
  navigation: {
    nextEl: `${baseClass}navigation-next`,
    prevEl: `${baseClass}navigation-prev`,
  },
});
