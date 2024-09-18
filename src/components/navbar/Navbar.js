import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#quienes-somos">
            <h1>Quienes somos</h1>
          </a>
          <a href="#que-hacemos">
            <h1>Que hacemos'</h1>
          </a>
          <a href="#como-lo-hacemos">
            <h1>Como lo hacemos</h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
