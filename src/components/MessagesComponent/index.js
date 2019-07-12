import React, { useState, useContext,useEffect } from 'react';
import { Context } from '../contexts/LoginContext';
import Messages from './Messages/'
import io from 'socket.io-client';
import { CustomInput } from "../library/CustomInput"
import { Button } from "../library/Button"

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
                changeMessages(messages => ([...messages, ...data.messages]))
                changeTo(data.messages[0] ? data.messages[0].from : "")
             });
            socket.on("acknowledgement", console.log)
            changeMessages([]);
            return () => {
                socket.disconnect();
            }
        }
    }, [context.token]);
    return <div className = "cui">
        <Messages messages={messages} to={to} changeTo={changeTo} />
        <div className = "send-options">
            <CustomInput
                label="to"
                style={{ width: "40%" }}
                defaultValue={to}
                watcher={changeTo} />
            <CustomInput
                label="message"
                style={{width:"40%"}}
                defaultValue={text}
                watcher={changeText} />
            <Button size="small" color="info" onClick={sendMessages}>Send</Button>
        </div>
    </div>
}