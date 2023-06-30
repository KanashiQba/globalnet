import React, { useState, useEffect } from "react";
import {getDocs, collection } from 'firebase/firestore';
import { db } from "./dbconfig.js";
import './App.css';
// import NavBar from './NavBar.js';
// import JSONDATA from './MOCK_DATA.json'
import "./App.css"


function App() {

  const [userNames, setUserNames] = useState([]);
  const [getTask, setTask] = useState([]);
  const userCollection = collection(db, "users");
   
    useEffect(()=>{
      const getTask = async () => {
        const data = await getDocs(userCollection);
        setTask(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }
      getTask();

      const fetchUserNames = async () => {
        const querySnapshot = await getDocs(userCollection);
        const users = querySnapshot.docs.map(doc => doc.data());
        const userNames = users.map(user => user.UserName);
        setUserNames(userNames);
        
      };
      fetchUserNames();

    },);

  return (    

      <div>
        {userNames.length > 0 ? (
          <ul>
            {userNames.map((userName, index) => (
              <div>
              <li key={index}>{userName}</li>   
              <button>
                <span class="plus">+</span>
                <span class="text">Add Friend</span>
              </button>
              </div>
            ))}
          </ul>
        ) : (
          <p>No user names found.</p>
        )}
      </div>
);
}

export default App;
  // const [searchTerm, setSearchTerm] = useState("");

  // return (
    
  //   <div className="App">
  //     <div className='nav' > <NavBar /></div>
  //     <div className='input'> 
  //             <input
  //       type="text"
  //       placeholder="Search..."
  //       onChange={(event) => {
  //         setSearchTerm(event.target.value);
  //       }}
  //     />
  //     {JSONDATA.filter((val) => {
  //       if (searchTerm === "") {
  //         return val;
  //       } else if (
  //         val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  //       ) {
  //         return val;
  //       }
  //       return null; 
  //     }).map((val, key) => (
  //       <div className="user" key={key}>
  //         <p>{val.first_name}</p>
  //         <p>{val.last_name}</p>
  //         <p>{val.email}</p>
  //       </div>
  //     ))}
  //     </div>

  //   </div>
    
  // );


