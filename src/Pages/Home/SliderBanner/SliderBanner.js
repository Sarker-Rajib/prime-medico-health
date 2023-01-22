import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper';

const SliderBanner = () => {
    return (
        <div className='py-5 overflow-hidden'>
            <div className="container pt-0 pt-lg-5">
                <h2 className='text-center pb-4'>My Skills on Technologies & Tools</h2>

                <Swiper
                    // slidesPerView={5}
                    loop={true}
                    centeredSlides={false}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            width: 320,
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 4,
                        },
                        992: {
                            width: 992,
                            slidesPerView: 5,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 6,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={html} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={css} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={js} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={react} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={boot} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={tail} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={express} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={node} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={vercel} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={git} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex align-item-center'>
                            {/* <img className='img-fluid' src={mdb} alt='imageCarouseer' /> */}
                            <p>hello</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default SliderBanner;