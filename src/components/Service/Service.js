import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, description, image } = service;
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="service-box">
                <div className="service-thumb">
                    <img src={image} alt={name} title={name} />
                    <div className="overlay d-flex justify-content-center align-items-center">
                        <h4 className="text-white">{name}</h4>
                    </div>
                </div>
                <div className="service-details">
                    <h3>{name}</h3>
                    <p>{description.slice(0, 200)}</p>
                    <div className="text-center">
                        <Link to={`/service/${id}`} className="btn btn-primary">
                            <span className="mx-2">Read More</span>
                            <i className="fa fa-angle-double-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;