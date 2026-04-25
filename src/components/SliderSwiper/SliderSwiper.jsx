import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import yandex from '../../assets/img/partners/yandex.svg'
import liveMart from '../../assets/img/partners/liveMart.png'
import french from '../../assets/img/partners/french.png'
import smile from '../../assets/img/partners/smile.webp'
import clear from '../../assets/img/partners/clear.webp'
import gym from '../../assets/img/partners/gym.webp'
import iceCream from '../../assets/img/partners/iceCream.webp'
import vegan from '../../assets/img/partners/vegan.webp'
import pada from '../../assets/img/partners/pada.webp'
import vegan2 from '../../assets/img/partners/vegan2.webp'
import jang from '../../assets/img/partners/jang.webp'

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSwiper.css';

const SliderSwiper = () => {
  // Массив с картинками (замените на свои URL)
  const images = [
    yandex,
    liveMart,
    french,
    smile,
    clear,
    gym,
    iceCream,
    vegan,
    pada,
    vegan2,
    jang
  ];

  // Разбиваем массив на слайды по 6 картинок
 const slides = [
    images.slice(0, 6),  // первые 6 картинок
    images.slice(6, 11), // оставшиеся 5 картинок
  ];

  return (
    <div className="sliderSwiper-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        loop={true}
        className="my-swiper"
      >
        {slides.map((slideImages, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="image-grid">
              {slideImages.map((imageUrl, imgIndex) => (
                <div key={imgIndex} className="image-item">
                  <img src={imageUrl} alt={`Slide ${slideIndex + 1} - Img ${imgIndex + 1}`} />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;