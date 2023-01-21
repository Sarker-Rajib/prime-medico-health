import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pnf from '../../Assets/Images/404.png';
import './Error404.css';

const Error404 = () => {
    return (
        <div className='nfpage'>
            <div className='con-wrapper'>
                <Link to="/" className='button-green'>Back to Home</Link>
                <Image src={pnf} className="img-fluid" />
            </div>
        </div>
    );
};

export default Error404;