import Swiper from 'swiper/swiper-bundle.min.mjs';
import 'swiper/swiper.min.css';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
