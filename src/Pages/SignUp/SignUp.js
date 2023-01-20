import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='login-page'>
            <div className='form-wrapper'>
                <h4 className='py-2 text-center text-white'>Please Log-In</h4>
                <form className='form-control border-0'>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="name" placeholder="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="pt-4 pb-3">
                        <Button className='submit-button'>Sign Up</Button>
                    </div>
                    <div className="pt-2 pb-3">
                        <Button className='submit-button'>Sign-Up With Google</Button>
                    </div>
                    <div>
                        <p className='text-white'>Already Registered ? <Link className='text-warning' to='/login'>Please Log-In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
