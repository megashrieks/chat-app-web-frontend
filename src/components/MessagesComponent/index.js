import React, { useState, useContext,useEffect } from 'react';
import { Context } from '../contexts/LoginContext';
import Messages from './Messages/'
import io from 'socket.io-client';
let socket;
export default () => {
    let context = useContext(Context);
    let [messages, changeMessages] = useState([]);
    let [to, changeTo] = useState("")
    let [text, changeText] = useState("")
    let sendMessages = () => {
        socket.emit("send", { to, message: text });
    }
    useEffect(() => {
        if (context.token) {
            socket = io.connect("http://localhost:8080/");
            console.log("sending register_connections")
            socket.emit("register_connection", { token: context.token });
            socket.on("message", data => { 
                console.log(data)
                changeMessages(messages => ([...messages,...data.messages]))
             });
            socket.on("acknowledgement", console.log)
            changeMessages([]);
            return () => {
                socket.disconnect();
            }
        }
    }, [context.token]);
    return context.token ? <div>
        <Messages messages={messages}/>
        <input value={to} onChange={({ target: { value } }) => { changeTo(value) }} />
        <br/>
        <input value={text} onChange={({ target: { value } }) => { changeText(value) }} />
        <button onClick={sendMessages}>Send</button>
    </div> : "Login to continue"
}