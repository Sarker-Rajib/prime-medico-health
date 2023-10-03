import React from 'react';
import avatar from './../../Assets/Images/avatar.png';
import './mAUS.css';

const MoreAboutUs = () => {
    return (
        <div className='container py-3'>
            <h2 className="section-header">Who are we !</h2>
            <p>We are a group of company. We have many other concerns that are related to public daily needs.
                <br />
                This medical is one of our public helping project where we provide services to people with minimum cost, so that people can get their basic health services.
                <br />
                Our management gathered with great heart people. So let's get introduced with them.
            </p>
            <div className="row g-4 mb-4">

                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Mr. Helio</h5>
                            <h6>Chairman</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Mr. John</h5>
                            <h6>CEO</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Dr. AR Devid</h5>
                            <h6>Head, Department of surgery</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Dr. Mathew</h5>
                            <h6>Head, Department of Medicine</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Miss Elizabeth</h5>
                            <h6>Head, Department of Nursing</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Mr. Wilson</h5>
                            <h6>Manager, Admin</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Mr. Harvey</h5>
                            <h6>Manager, HR</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Mr. Andrew</h5>
                            <h6>Manager, Accounts</h6>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="info-card">
                        <div className="image pb-2">
                            <img src={avatar} alt="ima" className="img-fluid" />
                        </div>
                        <div className="text">
                            <h5>Mr. Collins</h5>
                            <h6>Head, Customer Services</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreAboutUs;