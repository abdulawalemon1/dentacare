import React from 'react';
import emon from "../../images/emon.png";
const About = () => {
    return (
        <div className='container d-flex justify-content-start align-items-center'>
            <div>
                <img className='' src={emon} alt="" />

            </div>
            <div>
                <h2 className='text-center text-primary'>Abdul Awal Emon</h2>
                <p>Hey, Its Emon here.My goal is to be an efficient Full-stack Developer. I'm going to start my career as a Front-end Developer as I'm pretty confident about my skills on this and will gradually keep working and learning so that I can keep growing as a Developer.I am totally determined for my goals, and I am going to achieve it no matter how hard it is. </p>
            </div>
        </div>
    );
};

export default About;