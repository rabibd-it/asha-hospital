import React from 'react';

const Slider = ({ slider }) => {
    const { id, title, description, image } = slider;
    return (
        <div className={id === 1 ? "carousel-item active" : "carousel-item"}>
            <img className="img-fluid" src={image} alt={title} title={title} />
            <div className="carousel-caption d-none d-md-block position-absolute">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;