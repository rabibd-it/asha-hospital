import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notFound from '../../images/404-bg.jpg';

const NotFound = () => {
    return (
        <section className="position-relative not-found-bg section over-layer-black" style={{
            backgroundImage: "url(" + notFound + ")"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="not-found position-relative text-center">
                            <h2 className="text-white">4<span>0</span>4</h2>
                            <p className="text-white">Sorry, the page you were looking for could not be found!</p>
                            <Link to="/" className="btn btn-primary">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;