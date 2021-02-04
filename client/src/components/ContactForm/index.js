import React, { useState } from 'react';
import "./style.css";
import API from "../../utils/API.js";

function ContactForm() {

    const [email, setEmail] = useState({
        email: '',
        note: ''
    });

    function emailIsValid(email) {
        return /\S+@\S+\.\S+/.test(email)
    };

    function handleInputChange(event) {
        const { name , value } = event.target;
        setEmail({
            ...email,
            [name]:value
        });
    };

    function verifySubmit(event) {
        event.preventDefault();
        var submittedEmail = event.target.parentElement.children[0].value;
        var submittedNote = event.target.parentElement.children[2].value;

        if (emailIsValid(submittedEmail)===true && submittedNote !== null) {
            setEmail({
                email: submittedEmail,
                note: submittedNote
            }, send(submittedEmail, submittedNote));
        } else if (emailIsValid(submittedEmail)===false) {
            alert("Please submit a valid e-mail");
        } else if (submittedNote == null) {
            alert("Please add a note");
        } else {
            alert("Error, check the submission fields.");
        }
    };

    function send(email, note) {
        API.storeContact({
            email: email,
            note: note
        }).then(res => {console.log(res)});
    };

    return(
        <div className = "contact-background">
            <div className= "contact-box">
                <h1>Contact</h1>
                <div className="contact-info-box">
                    <h3>Any questions, contact me at:</h3>
                   <p></p>
                    <a href="mailto:drewjefferson66@gmail.com"><h2>drewjefferson66@gmail.com</h2></a>
                   <p></p>                    
                    <a href="mailto:https://www.linkedin.com/in/drew-jefferson-6580aa206/"><h2>LinkedIn</h2></a>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;