import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('../doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    const result = doctors.find(({ id }) => id == doctorId);

    return (
        <div>
            <Breadcrumb title={`Doctor ${result?.name}`}></Breadcrumb>
            {/* Doctor Details Start */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="section-title text-white">
                                <h2 className="section-separator text-black">Doctor: <span className="text-regular">{result?.name}</span></h2>
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
                                        <div className="table-responsive">
                                            <table className="table table-light table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th className="w-25">Name</th>
                                                        <td className="w-75">{result?.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Department</th>
                                                        <td>{result?.department}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Designation</th>
                                                        <td>{result?.designation}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Specialist</th>
                                                        <td>{result?.specialist}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Phone</th>
                                                        <td>{result?.phone}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Email</th>
                                                        <td>{result?.email}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="text-center">
                                                <Link to="/doctors" className="btn btn-primary">Go Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Doctor Details End */}
        </div>
    );
};

export default DoctorDetail;