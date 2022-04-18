import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
            <div className='d-flex justify-content-center align-items-center'>
                <img style={{ height: '80px' }} src={logo} alt="" />
                <h2>DentaCare</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <p><small>copyright &copy;{year}</small></p>

            </div>
            <div className='icons'>
                <div className=''>
                    <BsFacebook></BsFacebook>
                </div>
                <div className=' '>
                    <AiFillInstagram></AiFillInstagram>
                </div>
                <div className=' '>
                    <AiFillYoutube></AiFillYoutube>
                </div>
            </div>
        </footer>
    );
};

export default Footer;