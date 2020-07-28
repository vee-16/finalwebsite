import React, { Fragment, useState } from "react";
import "./Join.css";

import icon_linkedin from "../../Images/icons/icon_linkedin.svg";
import icon_instagram from "../../Images/icons/icon_instagram.svg";
import icon_facebook from "../../Images/icons/icon_facebook.svg";
import icon_email from "../../Images/icons/icon_email.svg";
import icon_law from "../../Images/icons/icon_law.svg";
import icon_newsletter from "../../Images/icons/icon_newsletter.svg";

function Join() {
  const [name, setName] = useState({
    text: "",
    valid: false,
  });

  const [email, setEmail] = useState({
    text: "",
    valid: false,
  });

  const [message, setMessage] = useState({
    text: "",
    valid: false,
  });

  function validateName(element) {
    var valid = element.value.length > 0 && element.value.includes(" ");

    document.getElementById("nameError").style.opacity = valid ? "0" : "1";

    setName({
      text: element.value,
      valid: valid,
    });
  }

  function validateEmail(element) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var valid = re.test(element.value);

    document.getElementById("emailError").style.opacity = valid ? "0" : "1";

    setEmail({
      text: element.value,
      valid: valid,
    });
  }

  function validateMessage(element) {
    var valid = element.value.length > 0;

    document.getElementById("messageError").style.opacity = valid ? "0" : "1";

    setMessage({
      text: element.value,
      valid: valid,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name.valid && email.valid && message.valid) {
      var form = { name: name.text, email: email.text, message: message.text };
      console.log(form);
      fetch("http://localhost:3002/send", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "success") {
            alert("Message Sent.");
            resetForm();
          } else if (response.status === "fail") {
            alert("Message failed to send.");
          }
        });
    }
  }

  function resetForm() {
    setName({
      text: "",
      valid: false,
    });
    setEmail({
      text: "",
      valid: false,
    });
    setMessage({
      text: "",
      valid: false,
    });
  }

  function joinNewsletter() {
    // Put newsletter popup code here
  }

  return (
    <Fragment>
      <div id="join">
        <h1>Join Us</h1>
        <h2>Follow us on social media and join our program today!</h2>

        {/* <div className="content"> */}
        {/* <form onSubmit={handleSubmit.bind(this)}>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={name.text}
              onChange={(e) => validateName(e.currentTarget)}
            />
            <label id="nameError">Please enter your name</label>
            <input
              type="text"
              id="email"
              placeholder="Your email"
              value={email.text}
              onChange={(e) => validateEmail(e.currentTarget)}
            />
            <label id="emailError">Please enter a valid email</label>
            <textarea
              id="message"
              type="text"
              name="comment"
              placeholder="Type your message or question here..."
              value={message.text}
              onChange={(e) => validateMessage(e.currentTarget)}
            />
            <label id={"messageError"}>Please enter a message</label>
            <button type={"submit"}>Send</button>
          </form> */}
        <div className="links">
          <div>
              <a href={"https://form.jotform.com/202020596594152"}>
               <img src={icon_law} alt={"intern"} />
              LawyerUp Application
            </a>
            <a
              href={
                "https://form.jotform.com/202020596594152"
              }
            >
              <img src={icon_law} alt={"intern"} />
             ScholarUp Application
            </a>
              <a href={"https://form.jotform.com/202020457089147"}>
               <img src={icon_law} alt={"intern"} />
              LevelUp Registration
            </a>
          </div>
          <div>
            <a href={"http://www.linkedin.com/company/lawyerupinternship"}>
              <img src={icon_linkedin} alt={"linkedin"} /> LinkedIn
            </a>
                 <a href={"https://www.facebook.com/lawyerupinternship"}>
              <img src={icon_facebook} alt={"facebook"} /> Facebook
            </a>
            <a href={"https://www.instagram.com/lawyerupinternship/?hl=en"}>
              <img src={icon_instagram} alt={"instagram"} /> Instagram
            </a>
               <a href={"mailto:lawyerupinternship@gmail.com"} target={"_blank"}>
              <img src={icon_newsletter} alt={"email"} />{" "} Email
            </a>
          </div>
        </div>

        {/* </div> */}
        <footer>
          &copy; 2020 LawyerUp | Developed by&nbsp;
          <a href={"https://www.linkedin.com/in/umeeshadalwis/"}>
            Umeesha D'Alwis
          </a>
          &nbsp;and&nbsp;
          <a href={"https://www.linkedin.com/in/brettseverin/"}>
            Brett Severin | <em>All Rights Reserved.</em> 
          </a>
        </footer>
      </div>
    </Fragment>
  );
}

export default Join;
