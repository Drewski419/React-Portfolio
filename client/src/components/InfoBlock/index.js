import React from 'react';
import "./style.css";
import me from "../../images/DrewPic.jpg";
import resume from "../../assets/AJResume.pdf";

function InfoBlock() {
    return(
        <div className = "fl-container green-back">
            <div className = "box box-1">
                <h1>Andrew Jefferson</h1>
                <img src={me} alt="me"/>
            </div>
            <div className = "box box-2">
                <h1>About Me:</h1>
                <p>I need to do a complete draft of my history here</p>
                <h1>Skills:</h1>
                <ul>
                    <li>React.js</li>
                    <li>Node.js, Express.js and Express-Handlebars</li>
                    <li>MySQL and Sequelize</li>
                    <li>MongoDB, Mongoose and Atlas</li>
                    <li>HTML, CSS and Bootstrap</li>
                    <li>CSS Flex and Grids</li>
                    <li>Javascript and JQuery</li>
                    <li>API Interaction/ AJAX and Axios</li>
                    <li>Git Flow, Branch Management</li>
                    <li>App Deployment</li>
                    <li>Angular and PHP</li>
                </ul>
                <h1>Resume:</h1>
                <a href={resume}>PDF Link</a>
            </div>
        </div>
    )
};

export default InfoBlock;