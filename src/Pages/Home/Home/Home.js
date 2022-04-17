import React from 'react';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;