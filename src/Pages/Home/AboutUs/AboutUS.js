import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUS = () => {
    return (
        <div className='about-us'>
            <Container>
                <div className='text-end'>
                    <h2 className="section-header-rtl">About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat atque quibusdam explicabo quidem commodi saepe dolore temporibus, deleniti incidunt recusandae, praesentium aspernatur consequuntur illum nobis et quaerat fuga placeat.</p>
                </div>
                <div>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Reprehenderit ducimus eos quo quos!</li>
                        <li>Laudantium laboriosam provident dolorum assumenda?</li>
                        <li>Voluptatibus molestias recusandae ducimus in.</li>
                        <li>Laboriosam praesentium numquam odit nulla.</li>
                    </ul>
                </div>
            </Container>

        </div>
    );
};

export default AboutUS;