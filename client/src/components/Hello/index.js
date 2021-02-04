import React from 'react';
import './style.css';

function Hello() {
    return(
        <div>
            <div className="invis-box">
                <div className="green-box">
                    <div className="text-group">
                        <div className="hi-group">
                            <h1 className="andrew-text">
                                <span className="name-1">Hello! Drew's the name</span>
                                <br />
                                <br />
                                <span className="name-2">Hola! Drew's the name</span>
                                <br />
                                <br />
                                <span className="name-3">Ciao! Drew's the name</span>
                                <br />
                            </h1>
                        </div>
                        <div className="hi-text">
                            <h2 className="description-text">I am a full-stack web developer specializing in 
                            <span className="technology"> Javascript</span>, 
                            <span className="technology"> HTML</span>, 
                            <span className="technology"> CSS</span>, 
                            <span className="technology"> Node</span>, 
                            <span className="technology"> Express</span>, 
                            <span className="technology"> MySQL</span>, 
                            <span className="technology"> MongoDB</span> and 
                            <span className="technology"> React.js</span>.  Currently learning 
                            <span className="technology"> Angular</span> and 
                            <span className="technology"> PHP</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hello;