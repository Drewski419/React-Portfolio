import React from 'react';
import './style.css';
import logo from "../../images/DrewPic2.png";

function Footer() {
    return(
        <footer>
            <div className="inner-footer">

                <div className="logo-container">
                    <a href="/home"><img src={logo} alt="a pic of me"/></a>
                </div>

                <div className="footer-third">
                    <h1>Nav</h1>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="footer-third">
                    <h1>Links</h1>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/drew-jefferson-6580aa206/">LinkedIn</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Drewski419">GitHub</a>
                </div>

                <div className="footer-third">
                    <h1>Proudly built with</h1>
                    <p>React.js, MongoDB, Express/Node, Javascript and deployed using Heroku.
                    Designed and built by Andrew "Drew" Jefferson, 2021.
                    </p>
                </div>

            </div>
        </footer>
    )
};

export default Footer;