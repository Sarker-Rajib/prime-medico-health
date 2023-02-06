import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllOurServices.css';

const AllOurServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="services">
            <div className='container pt-4'>
                <h2 className="section-header">All Our Services</h2>
                <h5 className='pb-4'>We provide services according to your need. Have a look about a little of our Services.</h5>
                <hr />
                {/* doctors */}
                <div className="pb-4">
                    <h2 className="sub-header">Doctor Consultation</h2>
                    <p>We provide consultation from great experienced doctors. You will be able to find our doctors who are experienced from abroad and from reputed organization.</p>
                    <Link to='/doctors' className='btn brand-button'>Make an appoinment</Link>
                </div>
                <hr />
                {/* ot */}
                <div className="pb-4">
                    <h2 className="sub-header">Surgery Servise in Moduler OT</h2>
                    <p>We provide consultation from great experienced doctors. You will be able to find our doctors who are experienced from abroad and from reputed organization.</p>
                </div>
                <hr />
                {/* medicine supply */}
                <div className="pb-4">
                    <h2 className="sub-header">Medicine Supply</h2>
                    <p>We provide consultation from great experienced doctors. You will be able to find our doctors who are experienced from abroad and from reputed organization.</p>
                    <Link to='/medicineshop' className='btn brand-button'>Medicine Shop</Link>
                </div>
                <hr />
                {/* Diagnostic tests */}
                <div className="pb-4">
                    <h2 className="sub-header">Diagnostics services</h2>
                    <p>We provide consultation from great experienced doctors. You will be able to find our doctors who are experienced from abroad and from reputed organization.</p>
                    <Link to='/laboratory' className='btn brand-button me-3'>Laboratory</Link>
                    <Link to='/r&i' className='btn brand-button me-3'>Radiology and Imaging</Link>
                    <Link to='/samplecollection' className='btn brand-button'>Home Service</Link>
                </div>
                <hr />
                {/* Telemedicine Service */}
                <div className="pb-4">
                    <h2 className="sub-header">Telemedicine Service</h2>
                    <p>We provide consultation from great experienced doctors. You will be able to find our doctors who are experienced from abroad and from reputed organization.</p>
                    <Link to='/telemedicine' className='btn brand-button'>Call Now</Link>
                </div>
                <hr />
                {/* Dental care */}
                <div className="pb-4">
                    <h2 className="sub-header">Dental Care</h2>
                    <p>We provide consultation from great experienced doctors. You will be able to find our doctors who are experienced from abroad and from reputed organization.</p>
                    <Link to='/dentalcare' className='btn brand-button'>More</Link>
                </div>
            </div>
        </div>
    );
};

export default AllOurServices;