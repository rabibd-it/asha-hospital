import React, { useEffect, useState } from 'react';
import './Footer.css';
import footerLogo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <footer>
            {/* Footer Top */}
            <section className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className="widget">
                                <div className="widget-title">
                                    <img className="logo" src={footerLogo} alt="logo" />
                                </div>
                                <p className="text-white">Asha General Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
                            </div>
                            <div className="widget-content">
                                <ul className="social-icon">
                                    <li><a key="0" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className="widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                    <div className="border-style"></div>
                                </div>
                                <div className="widget-content">
                                    <ul className="list-style link-border">
                                        <li>
                                            <Link to="/">
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us">
                                                <i className="fa fa-arrow-circle-right"></i>
                                                About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services">
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/doctors">
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Doctors
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">
                                                <i className="fa fa-arrow-circle-right"></i>
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className="widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                    <div className="border-style"></div>
                                </div>
                                <div className="widget-content">
                                    <ul className="list-style link-border">
                                        {
                                            services.slice(0, 5).map(service => <li key={service.id}>
                                                <Link to={`/service/${service.id}`}>
                                                    <i className="fa fa-arrow-circle-right"></i>
                                                    {service.name}
                                                </Link>
                                            </li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
                            <div className="widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                    <div className="border-style"></div>
                                </div>
                                <div className="widget-content">
                                    <ul className="list-style">
                                        <li>
                                            <a href="tel:+8801711001122">
                                                <i className="fa fa-phone"></i>
                                                +8801711 001122
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+88021001122">
                                                <i className="fa fa-fax"></i>
                                                +880 2 1001122
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@ashahospital.com">
                                                <i className="fa fa-envelope"></i>
                                                info@ashahospital.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-map-signs"></i>
                                                Shahid Kazol Sarani, Palaspole, Satkhira.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-globe"></i>
                                                www.ashahospital.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <section className="footer-bottom">
                <div className="container d-flex justify-content-between">
                    <span>&copy; 2021 Asha General Hospital. All Rights Reserved.</span>
                    <span>
                        <strong>Developed By:</strong>
                        <a className="text-decoration-none mx-2" href="#" target="_blank">Rabiul Islam</a>
                    </span>
                </div>
            </section>
        </footer>
    );
};

export default Footer;