import React from "react";
import "./index.scss";

function Footer() {
    return (
        <div className="footerContainer">
            <nav className="footer-nav">
                <ul className="list-reset">
                    <li>
                        <img src="/logo.svg" alt="Copyright logo"/>
                        <span>&copy; 2021 Ratatouille, all rights reserved</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Footer;
