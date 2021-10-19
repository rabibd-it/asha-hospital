import React from 'react';
import { Link } from 'react-router-dom';
import breadcrumb from '../../../images/breadcrumb.jpg';
import './Breadcrumb.css';

const Breadcrumb = ({ title }) => {
    return (
        <section className="breadcrumb-bg" style={{
            backgroundImage: "url('" + breadcrumb + "')"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mini-title inner-style-2">
                            <h3>{title}</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;