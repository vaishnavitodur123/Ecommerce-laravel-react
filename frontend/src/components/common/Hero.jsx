import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import Banner2 from "../../assets/image/banner-2.jpg";
import Banner1 from "../../assets/image/banner-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
    return (
        <section className='section-1'>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <img
                        className='content'
                        src={Banner1}
                        alt='Fashion Banner 1'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='content'
                        src={Banner2}
                        alt='Fashion Banner 2'
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
