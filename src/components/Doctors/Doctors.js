import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div>
            <Breadcrumb title="Doctors"></Breadcrumb>
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
                            doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                        }
                    </div>
                </div>
            </section>
            {/* Our Doctor End */}
        </div>
    );
};

export default Doctors;