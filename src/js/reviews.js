import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Показывать по одной картинке
  spaceBetween: 10, // Расстояние между слайдами
  loop: true, // Бесконечный цикл
  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "следующий"
    prevEl: '.swiper-button-prev', // Кнопка "предыдущий"
  },
});
