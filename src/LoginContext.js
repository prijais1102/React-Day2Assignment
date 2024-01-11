import React from 'react';
import { useState } from "react";
import WelcomeContext from './WelcomeContext';
import loginContext from './Context';

export default function Login1() {
    const [username, setUsername] = useState("");
    return (
        <div>
            <h1>Using context </h1>
            <form onSubmit={OnSubmitForm}>
                <label>Username</label>
                <input type='text' name='username' required></input>
                <label>Password</label> 
                <input type='password' name='password' required></input>
                <button type='submit' onSubmit={OnSubmitForm}>Login</button>
                <loginContext.Provider value={username}>
                    <WelcomeContext/>
                </loginContext.Provider>
            </form>
        </div>
    )
    function OnSubmitForm(e) {
        e.preventDefault()
        setUsername(e.target.username.value);
    }
}