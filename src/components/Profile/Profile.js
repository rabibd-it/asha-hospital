import React from 'react';
import useAuth from '../../hooks/useAuth';
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div>
            <Breadcrumb title="Profile"></Breadcrumb>
            {/* Profile Start */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto">
                            <div className="section-title text-white">
                                <h2 className="section-separator text-black">Profile</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="table-responsive col-12 col-lg-8 mx-auto">
                            <table className="table table-light table-striped">
                                <tbody>
                                    <tr>
                                        <th className="w-25">Name</th>
                                        <td className="w-75">{user.displayName}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Verify</th>
                                        <td>{user.emailVerified ? <span className="btn btn-success">Yes</span> : <span className="btn btn-danger">No</span>}</td>
                                    </tr>
                                    <tr>
                                        <th>Created</th>
                                        <td>{user.metadata.creationTime}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/* Profile End */}
        </div>
    );
};

export default Profile;