import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <hr />

      <nav className="footer-nav">
        <ul className="list-reset">
          {/* <li>Contact</li>
          <li>About</li>
          <li>FAQ</li> */}
          <li>
            {" "}
            <img src="/logo.svg" alt="" /> &copy; 2021 Ratatouille, all rights
            reserved
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
