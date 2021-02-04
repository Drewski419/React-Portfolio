import React from 'react';
import "./style.css";
import me from "../../images/DrewPic1.jpg";
import resume from "../../assets/AJefferson.pdf";

function InfoBlock() {
    return (
        <div className="fl-container green-back">
            <div className="box box-1">
                <h1>Andrew "Drew" Jefferson</h1>
                <img src={me} alt="me" />
            </div>
            <div className="box box-2">
                <h1>About Me:</h1>
                <p>After working 20 years in the technology field at the most prestious law firms in the country, I decided to embark on a new career path using my technical abilities to become a full stack web developer. I enrolled in UCLA's Coding Bootcamp that started in October, 2020 and graduated in January, 2021.  Moreover, when reviewing my resume, it will also become evident that I am heavily experienced in supervising large teams, overseeing multiple projects and most importantly, thrive in a stressful environment when navigating tight deadlines and changing priorities.</p>
                <h1>Skills:</h1>
                <ul>
                    <li>React.js</li>
                    <li>Node.js, Express.js and Express-Handlebars</li>
                    <li>MySQL and Sequelize</li>
                    <li>MongoDB and Mongoose</li>
                    <li>HTML, CSS and Bootstrap</li>
                    <li>CSS Flex and Grids</li>
                    <li>Javascript and JQuery</li>
                    <li>API Interaction / AJAX and Axios</li>
                    <li>Git Flow, Branch Management</li>
                    <li>MERN / App Deployment</li>
                    <li>Currently self-teaching Angular and PHP with the goal of creating a project using each application</li>
                </ul>
                <h1>Resume:</h1>
                <a href={resume}><p>Click Link of PDF Version</p></a>
            </div>
        </div>
    )
};

export default InfoBlock;