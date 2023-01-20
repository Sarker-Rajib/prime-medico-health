import React, { useContext, useState } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/Images/logo-big.png'
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const { currentUser, logOut } = useContext(AuthContext);
    const [logout, setLogout] = useState(false);


    return (
        <div className="header">
            <div className="fixed-top heading">
                <Container>
                    <nav className="navbar navbar-expand-lg">
                        <Link to="/">
                            <Image className='img-fluid logo' src={logo} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="">
                                =
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            {
                                currentUser &&
                                <span className='position-relative'>
                                    <p onClick={() => setLogout(!logout)} className='UserName ms-2 cursor-pointer'>{currentUser?.displayName} </p>

                                    {
                                        logout &&
                                        <Button className='position-absolute logout-button'
                                            onClick={() => {
                                                logOut();
                                                setLogout(!logout)
                                            }}
                                        >Logout</Button>
                                    }
                                </span>
                            }
                        </div>
                    </nav>
                </Container>
            </div>
        </div >
    );
};

export default Header;