import React from "react";
import "./Navbar.css";
const logoLink = window.location.href + "assets/images/logo.png";
function Navbar() {
  return (
    <div className="navbar container">
      <div className="space"></div>
      <img src={logoLink} alt="logo" />
      <div className="contact">
        <h2>My Number</h2>
        <h3>96 857 094</h3>
      </div>
    </div>
  );
}

export default Navbar;
