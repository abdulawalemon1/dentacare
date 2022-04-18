import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateCheckout = event => {
        navigate('/checkout');
    }
    return (


        <div className="col">
            <div className="cardBox">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h4 className="card-title">Price: {price}</h4>
                    <p className="card-text">{description}</p>
                    <button onClick={navigateCheckout} className='button-29 '>Book Now</button>
                </div>
            </div>
        </div>


    );
};

export default Service;