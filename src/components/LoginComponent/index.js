
import React, { useState, useContext } from 'react';
import { Context } from '../contexts/LoginContext';
import { CustomInput } from '../library/CustomInput';
import { Button } from '../library/Button';
export default () => {
    let [username, changeUsername] = useState("");
    let [password, changePassword] = useState("");
    let [error, setError] = useState("");
    let setUsername = (...args) => { setError(false); changeUsername(...args) };
    let setPassword = (...args) => { setError(false); changePassword(...args) };
    
    let doLogin = () => {
        context.doLogin({ username, password })
            .then(data => {
                if (data) setError(data);
            })
    }
    let context = useContext(Context);
    return <div style={{ padding: "20px", width: "400px" }}>
        <div style={{ width: "70%",margin:"0 auto"}}>
        <CustomInput
            label={"username"}
            triggerOnChange
            defaultValue={username}
            watcher={setUsername}
            error={error}
            errorMessage={error} />
        <CustomInput
            type="password"
            triggerOnChange
            label={"password"}
            defaultValue={password}
            watcher={setPassword}
            error={error}
            errorMessage={error} />
            <Button color="info" variant="primary" size="small" onClick={doLogin}>Submit</Button>
        </div>
    </div>
}