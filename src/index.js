import './styles/view/guided_shoping.scss';
import './styles/view/home.scss';
import './styles/view/special_styling.scss';
import './styles/view/style_session.scss';
import './styles/view/wardrobe_edit.scss';
//=======================================
import home_nav from './scripts/navigation';
home_nav();
import mod_testimonial from './scripts/mod_testimonial';
mod_testimonial();
import video_play from './scripts/video_play';
video_play();
import animat_visibl_scroll from './scripts/scroll_visible';
animat_visibl_scroll();
//=======================================
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


new Swiper('.enough_swiper', {
  loop: true,
  allowSlidePrev: true,
  slideToClickedSlide: true,
  // centeredSlides: true,
  // centerInsufficientSlides: true,
  grabCursor: true,
  mouseWhell: true,
  freeMode: true,
  speed: 600,
  on: {
    slideChange: function (swiper) {
      let activeIndex = swiper.realIndex;
      let cards = document.querySelectorAll('.enough_img');
      cards.forEach((item, index) => {
        let text = item.querySelector('.enough_message');
        if (index === activeIndex) {
          item.classList.add('enough_activ');
          text.classList.add('text_show');
        } else {
          item.classList.remove('enough_activ');
          text.classList.remove('text_show');
        }
      });
    }
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    767.98: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
})

new Swiper('.approach_swiper', {
  modules: [Navigation],
  loop: true,
  allowSlidePrev: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  centerInsufficientSlides: true,
  grabCursor: true,
  mouseWhell: true,
  freeMode: true,
  slidesPerView: 0,
  spaceBetween: 60,
  speed: 1000,
  navigation: {
    nextEl: '.arrow_right',
    prevEl: '.arrow_left',
  }
})

new Swiper('.testim_swiper', {
  loop: true,
  allowSlidePrev: true,
  slideToClickedSlide: true,
  centeredSlides: true,
  centerInsufficientSlides: true,
  grabCursor: true,
  mouseWhell: true,
  freeMode: true,
  slidesPerView: 0,
  spaceBetween: 60,
  speed: 1000,
})