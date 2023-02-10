import React from "react";
import "./Navbar.css";
const logoLink = window.location.href + "assets/images/logo.png";
function Navbar() {
  return (
    <div className="navbar container">
      <div className="space"></div>
      <img src={logoLink} alt="logo" />
      <div className="contact">
        <h2>Contactez-nous sur</h2>
        <h3>55 09 20 20</h3>
      </div>
    </div>
  );
}

export default Navbar;
