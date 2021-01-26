import React from 'react';
import "./navbar.css";

function navbar() {

    return (
        <div className="navbar">
        <nav>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Features">Features</a></li>
            <li><a href="#About">About</a></li>
          </ul> 
        </nav>
      </div>
    )
}

export default navbar;
