import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import doctor from '../../../Assets/Images/smileeedoctor.jpg';
import './OurGoal.css';

const OurGoal = () => {
    return (
        <div className='our-goal'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Image src={doctor} className="img-fluid rounded" />
                    </Col>
                    <Col lg={6}>
                        <div className="text-end">
                            <h2 className='section-header-rtl'>Our Goal</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurGoal;