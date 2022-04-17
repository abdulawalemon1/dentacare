import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <div className="section">
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

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 ">
                                <div class="">
                                    <div class="">
                                        <div class="">
                                            <div class="card1">
                                                <h2>Contact Us</h2>
                                                <ul class="">
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

                            <div class="col-lg-3 col-md-6 ">
                                <div class="">
                                    <div class="">
                                        <div class="">
                                            <div class="card2">
                                                <h2>Useful Link</h2>
                                                <ul class="">
                                                    <li>

                                                        <p>About Us</p>
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

                            <div class="col-lg-3 col-md-6 ">

                                <div class="card1">
                                    <h2>Recent Post</h2>
                                    <ul class="">
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

                            <div class="col-lg-3 col-md-6 ">

                                <div class="card2">
                                    <h2>More Services</h2>
                                    <ul class="">
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