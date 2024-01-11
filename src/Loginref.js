import React, { useRef, useState } from 'react';
import Welcomeref from './Welcomeref';

const Loginref = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(`Username: ${username}, Password: ${password}`);
    setIsLoggedIn(true);
  };

  return (
    <>
    <h1>In Login Component</h1>
      {!isLoggedIn ? (
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} required/>

          <button type="submit">Login</button>
        </form>
      ) : (
        <Welcomeref username={usernameRef.current.value} />
      )}
    </>
  );
};
export default Loginref;

