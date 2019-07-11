import React from 'react';
import LoginComponent from '../LoginComponent/';
import MessagesComponent from '../MessagesComponent/';
import './index.css'
export default (props) => {
    return <div className="container">
        <LoginComponent />
        <MessagesComponent/>
    </div>
}