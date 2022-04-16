
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.render(
    <BrowserRouter>

        <App></App>

    </BrowserRouter>,

    document.getElementById('root')
);

