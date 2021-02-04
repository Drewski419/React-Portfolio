import React from 'react';
import "./style.css";
import nogym from "../../images/nogymtest.gif"
import comfort from "../../images/screencap.gif";

function ProjectGroup() {
    return(
        <div>
            <div className="project">
                <div className="project-image">
                    <img src={comfort} alt="screen capture of site"/>
                </div>
                <div className="project-desc">
                    <h1>Home Cooked Comfort</h1>
                    <p>USER STORY</p>
                    <p>As a user stuck in quarantine, I want to search for new recipes to make while stuck at home. I should be able to filter my search based on food type and allergies.
                    WHEN I load the home page, THEN random recipes are appended to the page that lead to recipe pages.
                    WHEN I search for specific food types on the recipe page, THEN recipes of that type should appear to view.
                    WHEN I enter allergies on the recipe, THEN recipes that include those allergens should not appear in the recipe list.</p>
                    <div className="project-link-box">
                        <a target="_blank" rel="noreferrer" href="https://tchristensendrumz.github.io/Home-Cooked-Comfort/">Link to Website</a>
                        <br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/Drewski419/Home-Cooked-Comfort">Link to Github Repo</a>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="project-image">
                    <img src={nogym} alt="screen capture of site"/>
                </div>
                <div className="project-desc">
                    <h1>NoGym</h1>
                    <p>NoGym is a web application that provides a personalized virtual gym based on the user's current workout environment. The web app collects the user's input on the workout equipment they have available and produces a personalized routine for them to follow with the equipment that they have at home.</p>
                    <p>During the Covid-19 pandemic many states went into a state of emergency and gyms were closed, forcing gym-goers to workout at home. It was quickly apparent that working out at home did not provide the same satisfaction. We created this app to help people obtain a workout that fits their 2020 lifestyle and follow a routine that is suited for their environment.</p>
                    <p>The user is required to sign up (for free) to begin using the app. Once they’ve logged in, the app will ask them to input their environment by selecting the workout equipment that they have available at home.</p>
                    <p>After setting up their environment, they can access “All Exercises” which provides a wide array of exercises for each muscle group.They can also go into their “Virtual Gym” where their personalized workout will be available.</p>
                    <p>From the main page the user has the option to use a BMI (body mass index) calculator and learn about what BMI means, or use the caloric need calculator to find out how many calories they must consume to reach their desired goal.</p>
                    <div className="project-link-box">
                        <a target="_blank" rel="noreferrer" href="https://nogym.herokuapp.com">Link to Heroku Deployment</a>
                        <br />
                        <a target="_blank" rel="noreferrer" href="https://github.com/TChristensenDrumz/NoGym">Link to Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectGroup;