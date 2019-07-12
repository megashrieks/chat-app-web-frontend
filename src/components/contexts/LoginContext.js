import React,{useState, createContext} from 'react';
import axios from 'axios';
let Context = createContext();

let LoginProvider =  ({ children }) => {
    let [token,changeToken] = useState("");
    let doLogin = ({ username, password }) => new Promise((resolve, reject) => {
        console.log(username, password)
        axios.post("http://localhost:8080/login", { username, password })
            .then(({ data: { error, token } }) => {
                if (error) resolve(error);
                else { resolve();changeToken(token);}
            })
        
    });
    return <Context.Provider value={{
        token,
        changeToken,
        doLogin
    }}>
        {children}
    </Context.Provider>
}
export {LoginProvider,Context}