import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <footer className='footer d-flex justify-content-around align-items-center'>
            <div className='d-flex justify-content-center align-items-center'>
                <img style={{ height: '80px' }} src={logo} alt="" />
                <h2>DentaCare</h2>
            </div>
            <div>
                <p><small>copyright @ /dynamic year/</small></p>

            </div>
            <div>
                <p>instagram</p>
                <p>facebook</p>
                <p>twitter</p>
            </div>
        </footer>
    );
};

export default Footer;