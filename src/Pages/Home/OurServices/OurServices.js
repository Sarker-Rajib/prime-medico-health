import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Ourservices.css';
import image1 from '../../../Assets/Images/3T-MRI.jpg';
import image2 from '../../../Assets/Images/doctor-character-background_1270-84.png';
import image3 from '../../../Assets/Images/co.png';
import image4 from '../../../Assets/Images/alinity-ci-series.png';
import image5 from '../../../Assets/Images/dental-filling-min-1080x675.png';

const OurServices = () => {
    return (
        <div className='our-services'>
            <Container>
                <Row className='align-items-center gy-3'>
                    <Col lg={5}>
                        <h2 className="section-header">Our Services</h2>
                        <p className='m-0'>We are commited to reach your your doorsteps to ensure you our services.</p>
                        <p>Let's see what services we provide ?</p>
                        <div className='atCareCenter'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out"
                        >
                            <h5>At Our Healthcare Center</h5>
                            <ul>
                                <li>Doctor Consultation</li>
                                <li>Any Kind of surgery (Laperoscopic / Robotics)</li>
                                <li>Dental Procedures</li>
                                <li>Diagnostic Tests (Laboratory)</li>
                                <li>X-ray, CT-Scan, MRI</li>
                                <li>Medicine Store</li>
                                <li>Emergency treatments</li>
                            </ul>

                            <h5>At home</h5>
                            <ul>
                                <li>Telemedicine (Online doctor consultation)</li>
                                <li>Get medicine from home</li>
                                <li>Lab test from your home</li>
                            </ul>
                            <Button className="brand-button">Explore</Button>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col md={6}
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-out"
                            >
                                <PhotoProvider>
                                    <PhotoView src={image1}>
                                        <img src={image1} alt="img" className='img-fluid h-100 w-100' />
                                    </PhotoView>
                                </PhotoProvider>
                            </Col>

                            <Col md={6}>
                                <Row className='h-100'>
                                    <Col md={6}
                                        data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="700"
                                        data-aos-easing="ease-in-out"
                                    >
                                        <PhotoProvider>
                                            <PhotoView src={image2}>
                                                <img src={image2} alt="img" className='img-fluid h-100 w-100' />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </Col>
                                    <Col md={6}
                                        data-aos="fade-right"
                                        data-aos-offset="200"
                                        data-aos-delay="50"
                                        data-aos-duration="700"
                                        data-aos-easing="ease-in-out"
                                    >
                                        <PhotoProvider>
                                            <PhotoView src={image4}>
                                                <img src={image4} alt="img" className='img-fluid h-100 w-100' />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='mt-2'>
                            <Col md={6}
                                data-aos="fade-left"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-out"
                            >
                                <PhotoProvider>
                                    <PhotoView src={image3}>
                                        <img src={image3} alt="img" className='img-fluid h-100 w-100' />
                                    </PhotoView>
                                </PhotoProvider>
                            </Col>
                            <Col md={6}
                                data-aos="fade-right"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-out"
                            >
                                <PhotoProvider>
                                    <PhotoView src={image5}>
                                        <img src={image5} alt="img" className='img-fluid h-100 w-100' />
                                    </PhotoView>
                                </PhotoProvider>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;