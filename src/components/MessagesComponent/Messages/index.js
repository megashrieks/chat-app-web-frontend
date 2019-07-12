import React from 'react';
import "./index.css"
export default ({ messages,to,changeTo }) => {
    let people_index = {};
    messages.forEach(message => {
        if (people_index[message.from])
            people_index[message.from].push(message.message);
        else
            people_index[message.from] = [message.message];
    });
    let people_names = Object.keys(people_index);
    let tabs = people_names.map((person, index) => {
        return <div
            key={index}
            className={"chat-header" + (person === to ? " active" : "")}
            onClick={() => changeTo(person)}
        >
            {person}
        </div>
    })
    return <div className="chat-container">
        <div className="chat-list">
            {tabs}
        </div>
        <div className="chat-content">
            {people_index[to] && people_index[to].map((message,index) => {
                return <div key={index} className="message">
                    {message}
                </div>
            })}
        </div>
    </div>
}