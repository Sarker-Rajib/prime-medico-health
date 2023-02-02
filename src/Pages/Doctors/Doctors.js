import React from 'react';
import DoctorCard from '../../Components/DoctorCard/DoctorCard';

const doctors = [
    {
        name: 'Mrs. Smith',
        department: 'b',
        expertise: 'c',
        photoUrl: 'https://media.istockphoto.com/id/1346586431/photo/doctor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=1Qp5frzpiaTnGL4_Sykev_1WnKO6fxbmePECQdZstTc=',
        available: '2.00-9.00',
        degree: 'degrees',
    },
    {
        name: 'Mrs. Smith',
        department: 'b',
        expertise: 'c',
        photoUrl: 'https://media.istockphoto.com/id/1346586431/photo/doctor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=1Qp5frzpiaTnGL4_Sykev_1WnKO6fxbmePECQdZstTc=',
        available: '2.00-9.00',
        degree: 'degrees',
    },
    {
        name: 'Mrs. Smith',
        department: 'b',
        expertise: 'c',
        photoUrl: 'https://media.istockphoto.com/id/1346586431/photo/doctor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=1Qp5frzpiaTnGL4_Sykev_1WnKO6fxbmePECQdZstTc=',
        available: '2.00-9.00',
        degree: 'degrees',
    },
    {
        name: 'Mrs. Smith',
        department: 'b',
        expertise: 'c',
        photoUrl: 'https://media.istockphoto.com/id/1346586431/photo/doctor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=1Qp5frzpiaTnGL4_Sykev_1WnKO6fxbmePECQdZstTc=',
        available: '2.00-9.00',
        degree: 'degrees',
    },
    {
        name: 'Mrs. Smith',
        department: 'b',
        expertise: 'c',
        photoUrl: 'https://media.istockphoto.com/id/1346586431/photo/doctor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=1Qp5frzpiaTnGL4_Sykev_1WnKO6fxbmePECQdZstTc=',
        available: '2.00-9.00',
        degree: 'degrees',
    },
    {
        name: 'Mrs. Smith',
        department: 'b',
        expertise: 'c',
        photoUrl: 'https://media.istockphoto.com/id/1346586431/photo/doctor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=1Qp5frzpiaTnGL4_Sykev_1WnKO6fxbmePECQdZstTc=',
        available: '2.00-9.00',
        degree: 'degrees',
    },
    {
        name: 'Mrs. Smith',
        department: 'b',
        expertise: 'c',
        photoUrl: 'https://media.istockphoto.com/id/1346586431/photo/doctor-portrait.jpg?b=1&s=170667a&w=0&k=20&c=1Qp5frzpiaTnGL4_Sykev_1WnKO6fxbmePECQdZstTc=',
        available: '2.00-9.00',
        degree: 'degrees',
    },
]

const Doctors = () => {
    return (
        <div className='container py-3'>
            <h2 className='section-header'>Our Experienced Doctors</h2>
            <div className="row g-4 pb-3">
                {
                    doctors?.map((doctor, index) =>
                        <DoctorCard doctor={doctor} key={index} />
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;