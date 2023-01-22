import React from 'react';
import { Container, } from 'react-bootstrap';
import './Feedback.css';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Feedback = () => {
    return (
        <div className='feedback'>
            <Container>
                <div>
                    <h2 className="section-header">What Our Patients Say !</h2>
                    <p>Let's See Feedback and Comments from our patients</p>
                </div>
                <div>
                    <Swiper
                        navigation={true}
                        slidesPerView={4}
                        spaceBetween={20}
                        autoplay={{
                            delay: 1000,
                        }}
                        // loop={true}
                        modules={[Navigation]}
                        className="mySwiper">

                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="comment-card">
                                <h6>Name</h6>
                                <p>Comment : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dolor.</p>
                                <span>date:</span>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Feedback;