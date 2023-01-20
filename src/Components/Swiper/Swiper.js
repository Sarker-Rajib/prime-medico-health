import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <div className="swiper">
                <Container>
                    <Row>
                        <Col>
                            <div className="text">
                                <h2 className='banner-heading'>Welcome</h2>
                                <p>to Prime Medico Health Center</p>
                                <h3 className='main-text'>We care for your health</h3>
                                <h5 className='slogan'>We Believe, We Love & We Cure</h5>
                                <h4>We are now with Advanced Technologies</h4>
                                <br />
                                <Button className='explone-button'>Explore our Services</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Swiper
                navigation={true}
                slidesPerView={1}
                autoplay={{
                    delay: 1000,
                }}
                loop={true}
                modules={[Navigation]}
                className="mySwiper">
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Row>
                            <Col >1</Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Row>
                            <Col >1</Col>
                        </Row>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <Row>
                            <Col >1</Col>
                        </Row>
                    </Container>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;

