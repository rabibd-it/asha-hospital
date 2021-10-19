import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import logo from '../../../images/logo.png';
import noPhoto from '../../../images/no-photo.jpg';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} height="50" alt={'Asha General Hospital'} title={'Asha General Hospital'} />
                        <span>Asha Hospital</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerMain" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerMain">
                        <ul className="navbar-nav col-lg-auto me-lg-auto justify-content-center">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" className="nav-link" activeClassName="active">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/doctors" className="nav-link" activeClassName="active">Doctors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us" className="nav-link" activeClassName="active">Contact Us</NavLink>
                            </li>
                        </ul>
                        {
                            user.email ?
                                <div className="dropdown text-end">
                                    <a href="#" className="d-block text-white text-decoration-none dropdown-toggle" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={user.photoURL ? user.photoURL : noPhoto} width="32" height="32" className="rounded-circle" />
                                        <span className="mx-2">{user.displayName}</span>
                                    </a>
                                    <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser">
                                        <li>
                                            <Link to="/profile" className="dropdown-item">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/profile-update" className="dropdown-item">Update Profile</Link>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a href="#" onClick={logOut} className="dropdown-item">Sign Out</a>
                                        </li>
                                    </ul>
                                </div>
                                :
                                <div className="text-end">
                                    <Link to="/login" className="btn btn-outline-light me-2">Sign In</Link>
                                    <Link to="/register" className="btn btn-warning">Sign Up</Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;