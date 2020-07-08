import React from 'react';
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="main-container">
      <h1 style={{'text-align': 'center'}}>Welcome to React Practice Apps</h1>
      <ul className="nav-links">
        <li><Link to="/tiktaktoe">Tik Tak Toe</Link></li>
        <li><Link to="/todo">ToDo</Link></li>
      </ul>
    </div>
  )
}

export default Home;
