import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from 'swiper';
import "./SliderBanner.css";

// images
import medicine from "./../../../Assets/Images/01med.png";
import mri from "./../../../Assets/Images/02mri.png";
import doctor from "./../../../Assets/Images/03doctor.png";
import blood from "./../../../Assets/Images/blood.jpg";
import telemed from "./../../../Assets/Images/teles.jpg";
import ot from "./../../../Assets/Images/ott.png";
import den from "./../../../Assets/Images/Dentistry.png";
import home from "./../../../Assets/Images/home.png";
import { Link } from 'react-router-dom';

const SliderBanner = () => {
    return (
        <div className='overflow-hidden slider-banner'>
            <div className="container">
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
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={doctor} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Consult with Doctor</h3>
                                    <p>You can take a appointmen from home</p>
                                    <Link className='banner-button' to='/doctors'>Appoinment Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={medicine} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Medicine Shop</h3>
                                    <p>Get Your medicine from our shop or Home</p>
                                    <Link className='banner-button' to='/medicineshop'>Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={blood} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Diagnostic laboratory</h3>
                                    <p>We perform all lab test with automated analysers</p>
                                    <Link className='banner-button' to='/laboratory'>About Laboratory</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={home} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Home Sample Collection</h3>
                                    <p>Give your diagnostics samples from home</p>
                                    <Link className='banner-button' to='/samplecollection'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={mri} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Radiology & Imaging</h3>
                                    <p>Do You radiology tests with Updated machine</p>
                                    <Link className='banner-button' to='/r&i'>About R&I Deparment</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={telemed} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Telemedicine Service</h3>
                                    <p>You can call a doctor for online medicine suggestion</p>
                                    <Link className='banner-button' to='/telemedicine'>Call Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={ot} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Surgery</h3>
                                    <p>We are providing advanced ot service with expert surgeons</p>
                                    <Link className='banner-button' to='/surgeons'>Our Surgeons</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='service-item'>
                            <img className='img-fluid' src={den} alt='imageCarouseer' />
                            <div className="text">
                                <div className='text-end'>
                                    <h3>Dental Care</h3>
                                    <p>Get Dental Treatment with Expert Dentists</p>
                                    <Link className='banner-button' to='/dentalcare'>Shedule your time</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default SliderBanner;