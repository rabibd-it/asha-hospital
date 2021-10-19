import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import './Home.css';
import Service from '../Service/Service';
import Doctor from '../Doctor/Doctor';
import Slider from '../Slider/Slider';
import aboutImg from '../../images/about.jpg';
import whyChooseImg from '../../images/why-choose-us-bg.jpg';

const Home = () => {

    const [sliders, setSliders] = useState([]);
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('sliders.json')
            .then(res => res.json())
            .then(data => setSliders(data))
    }, []);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    return (
        <div>
            {/* Main Slider Start */}
            <div id="slider" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        sliders.map(slider => <Slider key={slider.id} slider={slider}></Slider>)
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                    <i className="fa fa-chevron-circle-left"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                    <i className="fa fa-chevron-circle-right"></i>
                </button>
            </div>
            {/* Main Slider End */}

            {/* Top Info Box Start */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="icon-box bg-info text-white">
                                <div className="icon">
                                    <i className="fa fa-headset"></i>
                                </div>
                                <div className="details">
                                    <h3>24/7 Support</h3>
                                    <p>Asha General Hospital Emergency provides non-stop life-saving care when required, 24 hours a day, seven days a week.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="icon-box bg-warning">
                                <div className="icon">
                                    <i className="fa fa-user-md"></i>
                                </div>
                                <div className="details">
                                    <h3>Expert Doctor's</h3>
                                    <p>Asha General Hospital aims to provide the highest possible level of care by the qualified consultants.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="icon-box bg-success text-white">
                                <div className="icon">
                                    <i className="fa fa-cart-plus"></i>
                                </div>
                                <div className="details">
                                    <h3>Online Payment</h3>
                                    <p>Online payment of OPD deposit is to avail all OPD services in the hospital, hence this deposit cannot be transferred against indoor bills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Top Info Box End */}

            {/* About Us Section Start */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="about-thumb">
                                <img className="img-fluid" src={aboutImg} alt="Asha General Hospital" title="Asha General Hospital" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="about-text">
                                <h2>About Us</h2>
                                <div className="border-style"></div>
                                <div className="my-3"></div>
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
            {/* About Us Section End */}

            {/* Our Services Start */}
            <section className="section bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="section-title text-white">
                                <h2 className="section-separator">Our <span className="text-regular">Services</span></h2>
                                <p>A warm and friendly ambience, high quality medical services and personalized nursing care have been the hallmarks of our hospital.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            services.slice(0, 6).map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                </div>
            </section>
            {/* Our Services End */}

            {/* Why Choose Us Section Start */}
            <section className="section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-2">
                            <h2>Why Choose Us?</h2>
                            <p className="lead">This Reasons That You Should Contact Us</p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row why-choose-item d-flex align-items-start mb-2">
                                        <div className="icon col-lg-2">
                                            <i className="fa fa-headset"></i>
                                        </div>
                                        <div className="col-lg-10">
                                            <h4>Excellent Services</h4>
                                            <p>Clinical excellence must be the priority for any health care service provider. Bushra Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="row why-choose-item d-flex align-items-start mb-2">
                                        <div className="icon col-lg-2">
                                            <i className="fa fa-user-md"></i>
                                        </div>
                                        <div className="col-lg-10">
                                            <h4>Qualified Doctors</h4>
                                            <p>Asha General Hospital aims to provide the highest possible level of care by the qualified consultants. Even the nurses & technicians are also proficiently trained.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="row why-choose-item d-flex align-items-start mb-2">
                                        <div className="icon col-lg-2">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <div className="col-lg-10">
                                            <h4>Patient Registration</h4>
                                            <p>Registration is an important step to becoming an Asha General Hospital patient after you confirmed as a Diabetic patient. It helps you and your medical information. Registration includes collecting basic information from you and creating your medical record.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-none d-lg-block">
                            <div className="why-choose-cover" style={{
                                backgroundImage: "url(" + whyChooseImg + ")"
                            }}></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose Us End */}

            {/* Our Doctor Start */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="section-title">
                                <h2 className="section-separator">Our Expert <span className="text-regular">Doctors</span></h2>
                                <p>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our doctors, We are all work together to help our all patients for recovery</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            doctors.slice(0, 4).map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </div>
                </div>
            </section>
            {/* Our Doctor End */}

            {/* Counter Start */}
            <section className="section bg-regular">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="counter text-center">
                                <i className="fa fa-user-md"></i>
                                <p className="text-white">Total Doctor</p>
                                <div className="timer text-white">
                                    <CountUp
                                        start={0}
                                        end={50}
                                        duration={2}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="counter text-center">
                                <i className="fa fa-hospital-user"></i>
                                <p className="text-white">Happy Patient</p>
                                <div className="timer text-white">
                                    <CountUp
                                        start={0}
                                        end={150000}
                                        duration={2}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="counter text-center">
                                <i className="fa fa-medkit"></i>
                                <p className="text-white">Total Service</p>
                                <div className="timer text-white">
                                    <CountUp
                                        start={0}
                                        end={80}
                                        duration={2}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="counter border-0 text-center">
                                <i className="fa fa-user-friends"></i>
                                <p className="text-white">Total Employee</p>
                                <div className="timer text-white">
                                    <CountUp
                                        start={0}
                                        end={150}
                                        duration={2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Counter End */}
        </div>
    );
};

export default Home;