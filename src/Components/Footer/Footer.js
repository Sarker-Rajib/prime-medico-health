import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Image className='img-fluid footer-logo' src={logo} />
                        <h2>We Believe, We Love & We Cure</h2>
                    </Col>
                    <Col lg={4}>
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Contact Us</Link></li>
                            <li><Link>Emergency Help</Link></li>
                        </ul>
                    </Col>
                </Row>
                <div className="text-center pt-3">
                    <p>All rights reserved @Prime Medico Healthcare Center.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;