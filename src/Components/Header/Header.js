import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/Images/logo-big.png'

const Header = () => {
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
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Container>
            </div>
        </div>
    );
};

export default Header;