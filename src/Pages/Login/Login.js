import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='login-page'>
            <div className='form-wrapper'>
                <h4 className='py-2 text-center text-white'>Please Log-In</h4>
                <form className='form-control border-0'>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="pt-4 pb-3">
                        <Button className='submit-button'>Login</Button>
                    </div>
                    <div className="pt-2 pb-3">
                        <Button className='submit-button'>Login With Google</Button>
                    </div>
                    <div>
                        <p className='text-white'>New in our website ? <Link className='text-warning' to='/signup'>Please Sign-Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;