import React from 'react';
import { Button } from 'react-bootstrap';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
    const { photoUrl,
        name,
        department,
        expertise,
        available,
        degree } = doctor;

    return (
        <div className='col-md-6 col-xl-4'>
            <div className='doc p-3 rounded'
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
            >
                <img className='img-fluid rounded' src={photoUrl} alt="doctorimages" />
                <h3 className='title'>{name}</h3>
                <p>{degree}</p>
                <p className='mb-0'>Experiensed at: {expertise}</p>
                <p className='mb-0'>Department: {department}</p>
                <p >Available: {available}</p>
                <Button className='brand-button w-100'>Make an appoinment</Button>
            </div>
        </div>
    );
};

export default DoctorCard;