import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, email, image, department, designation, social } = doctor;
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="doctor">
                <div className="doctor-thumb">
                    <img src={image} alt={name} title={name} />
                    <div className="doctor-overlay">
                        <ul className="doctor-social">
                            {
                                social.facebook && <li><a href={social.facebook}><i className="fa fa-facebook"></i></a></li>
                            }
                            {
                                social.twitter && <li><a href={social.twitter}><i className="fa fa-twitter"></i></a></li>
                            }
                            {
                                social.linkedin && <li><a href={social.linkedin}><i className="fa fa-linkedin"></i></a></li>
                            }
                            {
                                social.instagram && <li><a href={social.instagram}><i className="fa fa-instagram"></i></a></li>
                            }
                            {
                                email && <li><a href={'mailto:' + email}><i className="fa fa-envelope"></i> Email</a></li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="doctor-details">
                    <h3 className="doctor-name">{name}</h3>
                    <p>{designation}</p>
                    <div className="text-center">
                        <Link to="/" className="btn btn-primary">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;