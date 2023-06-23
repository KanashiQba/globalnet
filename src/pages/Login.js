import React, { useState } from 'react';
import { db } from "./dbconfig.js";

const Login = () => {
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    db.auth().signInWithUserNameAndPassword(UserName, password)
      .then((userCredential) => {
        // Handle successful login
      })
      .catch((error) => {
        // Handle login error
      });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Username"
        value={UserName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
