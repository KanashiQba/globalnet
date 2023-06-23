import React from 'react'
import NavBar from './NavBar.js';
import JSONDATA from './MOCK_DATA.json'
import "./App.css"
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    
    <div className="App">
      <div className='nav' > <NavBar /></div>
      <div className='input'> 
              <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
        return null; 
      }).map((val, key) => (
        <div className="user" key={key}>
          <p>{val.first_name}</p>
          <p>{val.last_name}</p>
          <p>{val.email}</p>
        </div>
      ))}
      </div>

    </div>
    
  );
}

export default App;

