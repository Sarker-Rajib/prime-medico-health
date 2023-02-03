import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import './Login.css';

const Login = () => {
    const { emailLogin, providerLogin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        emailLogin(email, password)
            .then(data => {
                console.log(data);
            })
    }

    const handleGoogleLogin = () => {
        const googleLogin = new GoogleAuthProvider();
        providerLogin(googleLogin)
            .then(data => {
                if (data) {
                    toast.success("Login successful")
                }
            })
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='login-page'>
            <div className='form-wrapper'>
                <h4 className='py-2 text-center text-white'>Please Log-In</h4>
                <form onSubmit={handleSubmit} className='p-3 form-control border-0'>
                    <div className="form-floating mb-3">
                        <input name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="pt-4">
                        <input type="submit" className='submit-button' value="Login" />
                    </div>
                </form>
                <hr />
                <div className="p-3">
                    <div className="pb-3">
                        <Button onClick={handleGoogleLogin} className='submit-button'>Login With Google</Button>
                    </div>
                    <div>
                        <p className='text-white'>New in our website ? <Link className='text-warning' to='/signup'>Please Sign-Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;