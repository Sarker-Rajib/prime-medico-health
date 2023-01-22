import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import doctor from '../../../Assets/Images/doctor.png';
import './OurDoctor.css';

const OurDoctors = () => {
    return (
        <div className='doctor-banner'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="text"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out"
                        >
                            <h3 className='section-header'>Our Doctors</h3>
                            <p>We are commited to give you best Services in this era.</p>
                            <p>So, here in our healthcare servise you will find Best doctors who are experienced with modern medication over the world.
                                They are well trained from diffrent foreign medical centers </p>
                            <p>You will be able to take appoinmnts for the following departmental doctors.</p>

                            <ul className='department-list' >
                                <li>Oncology</li>
                                <li>Neurology</li>
                                <li>Gynaecology</li>
                                <li>Neurosurgery</li>
                                <li>Orthopaedics</li>
                                <li>Plastic Surgery</li>
                                <li>Gastroenterology</li>
                                <li>General medicine</li>
                                <li>ENT(Ear, Nose, Throat)</li>
                                <li>Cardiology and Cardiac Surgery</li>
                            </ul>
                            <p>Explore Our Doctors and appoint yours -</p>
                            <Button className='btn brand-button'>Visit Our Doctors</Button>
                        </div>
                    </Col>
                    <Col lg={6} className="text-center">
                        <Image src={doctor} className="img-fluid"
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurDoctors;