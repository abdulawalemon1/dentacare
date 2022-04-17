import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (


        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4 className="card-title">{price}</h4>
                    <p className="card-text">{description}</p>
                    <button className='btn btn-primary'>Book Now</button>
                </div>
            </div>
        </div>


    );
};

export default Service;