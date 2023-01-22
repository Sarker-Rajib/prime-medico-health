import React from 'react';
import './Banner.css';
import { FaArrowDown } from 'react-icons/fa';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="text">
                                <h2 className='banner-heading'>Welcome</h2>
                                <p className='pp'>to Prime Medico Health Center</p>
                                <h3 className='main-text'>We care for your health</h3>
                                <h5 className='slogan'>We Believe, We Love & We Cure</h5>
                                <h4>We are now with Advanced Technologies</h4>
                                <br />
                                <Button className='explore-button'>Explore our Services</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <a className='bottom-link' href="#doctorBanner">
                    <FaArrowDown className='arrow' />
                </a>
            </div>
        </>
    );
};

export default Banner;

