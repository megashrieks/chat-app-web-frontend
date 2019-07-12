import React,{useContext} from 'react';
import LoginComponent from '../LoginComponent/';
import MessagesComponent from '../MessagesComponent/';
import { Context } from "../contexts/LoginContext"
import {Button} from "../library/Button"
import './index.css'
export default () => {
    let context = useContext(Context);
    return <div>
        <div className="container">
            {!context.token && <LoginComponent />}
            {context.token && <MessagesComponent />}
        </div>
        {context.token && <Button color="danger" size="small" onClick={() => context.changeToken("")}>Logout</Button>}
    </div>
}