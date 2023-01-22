import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <Container>
                <Row className='gy-3'>
                    <Col lg={6}>
                        <h2 className='section-header'>Contact Us</h2>
                        <p className='m-0'>Phone: 8654 3546, 9699 5768</p>
                        <p className='m-0'>Mobile: +880 61115 156722</p>
                        <p className='m-0'>Email : info@pmhc.com</p>
                        <p className='m-0'>Address : Dhaka, Bangladesh</p>
                        <form className='form-control mt-3'>
                            <p className="pt-6 pb-2">Send your message</p>
                            <input className='form-control' type="text" placeholder='Enter Name' />
                            <br />
                            <input className='form-control' type="email" placeholder='Enter email' />
                            <br />
                            <textarea className='form-control mb-2' cols="30" rows="5"></textarea>

                            <Button className="w-100 brand-button">Send</Button>
                        </form>
                    </Col>
                    <Col lg={6}>
                        <iframe title='map' className='w-100 h-100 border rounded overflow-hidden p-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.929175165831!2d90.36542960000001!3d23.774741049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ac0ea174af%3A0x515136eca08d1278!2sShaheed%20Suhrawardy%20Medical%20College%20and%20Hospital!5e0!3m2!1sen!2sbd!4v1674318577576!5m2!1sen!2sbd" loading="lazy"></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;