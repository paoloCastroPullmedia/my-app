import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginControl from './LoginControl.js';
import './index.css';
import GoogleLoginRender from './GoogleLogin';

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);

ReactDOM.render(
    <GoogleLoginRender
    />,
    document.getElementById('googleButton')
);
