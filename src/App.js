import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import logo from './logo.svg';
import './App.css';

// Initialize your Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyCSO6bRVvBno33Xmc-i2qG_EHNWTl9iXag",
  authDomain: "globalnet-8386f.firebaseapp.com",
  projectId: "globalnet-8386f",
  storageBucket: "globalnet-8386f.appspot.com",
  messagingSenderId: "926314328592",
  appId: "1:926314328592:web:28f67b1d5df5b38bfb5095",
  measurementId: "G-MKFB509T84"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Get the Firestore instance

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const jobCollectionRef = collection(db, 'tasks');

    const getTasks = async () => {
      const data = await getDocs(jobCollectionRef);
      setTaskList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
  }, []);

  return (
    <div className="app">
      <header className="App-header">
          <div className="App-logo">

          </div>
          <div className="App-buttons">

          </div>
          <div className="App-f">

          </div>
         
      </header>
      <body className="App-body">

      </body>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
