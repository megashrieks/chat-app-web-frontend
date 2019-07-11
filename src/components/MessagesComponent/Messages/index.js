import React,{ Fragment } from 'react';
export default ({ messages }) => {
    return messages.map((message, index) => {
        console.log(message)
        return <div key={index}>
            From : {message.from}
            Message : {message.message}
        </div>
    })
}