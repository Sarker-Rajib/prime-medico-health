import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';

const Laboratory = () => {
    return (
        <div className='container'>
            <div className="slider-medicine pt-3">
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={false}
                    spaceBetween={10}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    speed={700}
                    autoplay={{
                        delay: 4000,
                    }}
                    modules={[Navigation]}
                    className="mySwiper pb-3"
                >
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image1} alt='ss' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Get All items of medicine includes foreign items</h3>
                                    <p>We import foreign medicines.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image2} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Get Sanitary Items with Medicines</h3>
                                    <p>Best items from top companies</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image3} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Get Contraceptic Items</h3>
                                    <p>We are cared for you.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image4} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Online Medicines from home</h3>
                                    <p>We provide home services also.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid w-100' src={image5} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-center'>
                                    <h3>Online Medicines from home</h3>
                                    <p>We provide home services also.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="details pt-2">
                <h2 className='section-header'>A little about our Laboratory</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis soluta architecto a, quibusdam enim illo ducimus totam ad delectus rem provident magnam libero velit dolores quidem vero error deserunt molestias! Voluptate veniam illum delectus ea, corporis repellat! Labore in velit, aperiam aspernatur sequi ea doloremque animi corrupti id nemo eaque.</p>
            </div>
        </div>
    );
};

export default Laboratory;