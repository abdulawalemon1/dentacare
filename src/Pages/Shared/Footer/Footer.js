import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='d-flex justify-content-center align-items-center'>
                <img style={{ height: '80px' }} src={logo} alt="" />
                <h2>DentaCare</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <p><small>copyright @ /dynamic year/</small></p>

            </div>
            <div className='icons'>
                <div className='d-flex justify-content-center'>
                    <BsFacebook></BsFacebook>
                </div>
                <div className='d-flex justify-content-center'>
                    <AiFillInstagram></AiFillInstagram>
                </div>
                <div className='d-flex justify-content-center'>
                    <AiFillYoutube></AiFillYoutube>
                </div>
            </div>
        </footer>
    );
};

export default Footer;