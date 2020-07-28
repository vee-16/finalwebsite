import React, { Fragment, useState } from "react";
import "./Landing.css";

import logo from "../../Images/logos/lawyerUpLogo.svg";

function Landing() {
  var slogan = "the legal internship you've been waiting for".split("");
  var [visibleSlogan, setVisibleSlogan] = useState("");

  function type() {
    var index = visibleSlogan.length;
    if (index < slogan.length) {
      window.setTimeout(function () {
        if (visibleSlogan !== slogan) {
          setVisibleSlogan(visibleSlogan += slogan[index]);
        }
        index++;
      }, 200);
    }
  }

  type();

  return (
    <Fragment>
      <div id="landing">
        <img src={logo} alt="logo" />
        <label>{visibleSlogan}</label>
      </div>
    </Fragment>
  );
}

export default Landing;
