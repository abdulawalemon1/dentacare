import React from 'react';
import errorPage from '../../../images/error404.jpg';
const Notfound = () => {
    return (
        <div>
            <img className='img-fluid' src={errorPage} alt="" />
        </div>
    );
};

export default Notfound;