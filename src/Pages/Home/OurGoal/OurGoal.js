import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import doctor from '../../../Assets/Images/smileeedoctor.jpg';
import './OurGoal.css';

const OurGoal = () => {
    return (
        <div className='our-goal'>
            <Container>
                <Row className='gy-3'>
                    <Col lg={6}>
                        <Image src={doctor} className="img-fluid rounded w-100"
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="700"
                            data-aos-easing="ease-in-out"
                        />
                    </Col>
                    <Col lg={6}>
                        <div className="text-end">
                            <h2 className='section-header-rtl'>Our Goal</h2>
                            <div className="text-start"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-out"
                            >
                                <p>It's very clear that we are always beside you to save you from unwanted things we face like diseases and accidents.
                                    We belive God always beside us and we can help each others.
                                </p>
                                <p>With minimum cost, our aim is to give you the mest medical services.</p>
                                <p>We are commited to reach at your doorstep, You just need to call us for once.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurGoal;