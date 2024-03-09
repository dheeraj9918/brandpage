import React from "react";
import "../App.css"

const Nav = () => {
  return (
    <div className="contairer">
      <div className ="Navbar">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className="manubar">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Nav;
