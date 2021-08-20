import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <hr />

      <nav className="footer-nav">
        <ul className="list-reset">
          <li>Contact</li>
          <li>About</li>
          <li>FAQ</li>
          <li>support</li>
        </ul>
      </nav>
      <div >
        <img src="/logo.svg" alt="" />  &copy; 2020 Cube, all rights reserved
      </div>
    </div>
  );
}

export default Footer;
