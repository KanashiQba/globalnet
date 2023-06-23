import React, { useState } from 'react';
import { db } from "./dbconfig.js";
import { collection } from 'firebase/firestore';

const Registration = () => {
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userCollection = collection(db, "users");

  const handleRegistration = () => {
    db.collection("users").add({
      UserName: UserName,
      Password: password,
      //UserName: '' // You can add a UserName field here if needed
    })
    .then(() => {
      // Handle successful registration
    })
    .catch((error) => {
      // Handle registration error
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
