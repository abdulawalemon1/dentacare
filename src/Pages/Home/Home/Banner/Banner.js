import React, { useState } from 'react';
import slider1 from '../../../../images/slide1.jpg';
import slider2 from '../../../../images/slide5.jpg';
import slider3 from '../../../../images/slide3.jpg';
import { Carousel } from 'react-bootstrap';
const Banner = () => {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-light fw-bold'>Welcome to DentaCare</h3>
                    <p className='text-light fw-bold'>Hi, I'm Dr. Hasnat. Welcome to my Dentacare </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-light fw-bold'>Happy Smile</h3>
                    <p className='text-light fw-bold'>My job is to make your smile beautiful</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-light fw-bold'>Modern Technology</h3>
                    <p className='text-light fw-bold'>
                        Lucrative chamber equiped with modern technologies.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;