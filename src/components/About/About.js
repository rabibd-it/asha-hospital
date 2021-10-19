import React from 'react';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';
import aboutImg from '../../images/about.jpg';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <Breadcrumb title="About Us"></Breadcrumb>
            {/* About Us Start */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="section-title">
                                <h2 className="section-separator">About Us</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 col-lg-6">
                            <div className="about-thumb">
                                <img className="img-fluid" src={aboutImg} alt="Asha General Hospital" title="Asha General Hospital" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="about-text">
                                <p>
                                    Asha General Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.
                                </p>
                                <p>
                                    Asha General Hospital hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness. A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care. Specialized hospitals can help reduce health care costs compared to general hospitals. Hospitals are classified as general, specialty, or government depending on the sources of income received.
                                </p>
                                <Link to="/services" className="btn btn-primary">Our Services</Link>
                                <Link to="/contact-us" className="btn btn-warning mx-2">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us End */}
        </div>
    );
};

export default About;