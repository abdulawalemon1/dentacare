import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <div id='subscribe' className="section">
            <div className='section-container mt-5'>
                <div className='subscribe-container'>
                    <div className='sub-text'>
                        Enter Your Mail For Subscribe</div>
                    <div className='inputBox'>
                        <input className='input-email' type="text" placeholder='Email Address' name='EMAIL' />
                        <input className='input-subscribe' type="submit" value="SUBSCRIBE" />
                    </div>
                </div>
                <div className='lower-section'>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 ">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <div className="card1">
                                                <h2>Contact</h2>
                                                <ul className="">
                                                    <li>

                                                        <p>66 Momenbag, Chittagong<br />Bangladesh</p>
                                                    </li>
                                                    <li>

                                                        <p>012 345 678 9101</p>
                                                    </li>
                                                    <li>

                                                        <p>emondx4@gmail.com</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 ">
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <div className="card2">
                                                <h2>Useful Link</h2>
                                                <ul className="">
                                                    <li>

                                                        <p>About Me</p>
                                                    </li>
                                                    <li>

                                                        <p>Team</p>
                                                    </li>
                                                    <li>

                                                        <p>Testimonial</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 ">

                                <div className="card1">
                                    <h2>Recent Post</h2>
                                    <ul className="">
                                        <li>

                                            <p>Creating healthy tomorrow ...</p>
                                        </li>
                                        <li>

                                            <p>Teeth whitening hack....</p>
                                        </li>
                                        <li>

                                            <p>Good vs Bad practises...</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-lg-3 col-md-6 ">

                                <div className="card2">
                                    <h2>More Services</h2>
                                    <ul className="">
                                        <li>

                                            <p>Childcare</p>
                                        </li>
                                        <li>

                                            <p>Adultcare</p>
                                        </li>
                                        <li>

                                            <p>Pregrancy Care</p>
                                        </li>
                                    </ul>
                                </div>



                            </div>

                        </div>
                    </div>


                </div >
            </div >
        </div >

    );
};

export default Subscribe;