import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return(
    <header>
      <div className="logo">
        <span>React App</span>
      </div>

      <ul>
        <li><Link to="/tiktaktoe">TikTakToe</Link></li>
        <li><Link to="/todo">ToDo</Link></li>
        <li><Link to="/forms">Forms</Link></li>
      </ul>
    </header>
  );
}

export default Header;
