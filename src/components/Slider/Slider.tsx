import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'; // fixed Swiper import
import { Autoplay } from 'swiper';

type ImgSliderPropsType = {
    slides: Array<{ image_url: string; caption: string }>;
};

const slides = [
    {
        image_url:
            'https://burgerking.kz/uploads/menuproducts/image/big_1628580655.png',
        caption: 'capture 1',
    },
    {
        image_url: 'https://burger-kingi.ru/images/menu-item/sibirskiy-king.png',
        caption: 'capture 2',
    },
    {
        image_url:
            'https://burger-king.by/upload/resize_cache/webp/iblock/cf5/dw48w1bq367hcjpejgde5dys4r0gpf4y.webp',
        caption: 'capture 3',
    },
];

export const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            autoplay={{ delay: 1000 }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {slides.map((slide) => (
                <SwiperSlide key={slide.image_url}>
                    <img src={slide.image_url} alt={slide.caption} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};