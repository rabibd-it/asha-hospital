import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <Breadcrumb title="Services"></Breadcrumb>
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
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                </div>
            </section>
            {/* Our Services End */}
        </div>
    );
};

export default Services;