import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import './Signup.css';

const SignUp = () => {
    const { createUser, upadateUserData } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const profile = {
            displayName: name,
        }

        createUser(email, password)
            .then(data => {
                console.log(data);
                upadateUserData(profile);
            })
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='login-page'>
            <div className='form-wrapper'>
                <h4 className='pt-2 text-center text-white'>Please Sign-Up</h4>
                <form onSubmit={handleSignUp} className='p-3 form-control border-0'>
                    <div className="form-floating mb-3">
                        <input name="name" type="text" className="form-control" id="name" placeholder="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="pt-4">
                        <input type="submit" value="Sign Up" className='submit-button' />
                    </div>
                </form>
                <hr />
                <div className="p-3">
                    <div className="pb-3">
                        <Button className='submit-button'>Sign-Up With Google</Button>
                    </div>
                    <div>
                        <p className='text-white'>Already Registered ? <Link className='text-warning' to='/login'>Please Log-In</Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;
