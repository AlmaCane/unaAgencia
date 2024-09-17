import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#quienes-somos">
            <button>Quienes somos</button>
          </a>
        </div>
      </nav>
      {/* {click && <QuienesSomos />} */}
    </div>
  );
}

export default Navbar;
