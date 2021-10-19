import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const result = services.find(({ id }) => id == serviceId);

    return (
        <div>
            <Breadcrumb title={`Service ${result?.name}`}></Breadcrumb>
            {/* Service Details Start */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="section-title text-white">
                                <h2 className="section-separator text-black">Service: <span className="text-regular">{result?.name}</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card p-5">
                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={result?.image} className="img-fluid rounded-start img-thumbnail" alt={result?.name} />
                                </div>
                                <div className="col-lg-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{result?.name}</h5>
                                        <p className="card-text">{result?.description}</p>
                                        <Link to="/services" className="btn btn-primary">Go Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Details End */}
        </div>
    );
};

export default ServiceDetail;