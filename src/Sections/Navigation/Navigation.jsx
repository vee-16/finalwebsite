import React, { Fragment } from "react";
import "./Navigation.css";

function Navigation() {
  function showSponsorPanel() {
    var panel = document.getElementById("sponsorPanel");
    panel.style.display = "flex";
    window.setTimeout(function () {
      panel.style.opacity = "1";
    }, 500);
  }

  return (
    <Fragment>
      <nav>
        <a href="#landing" className="logo">
          LawyerUp
        </a>
        <div className="menu">
          <a href="#story">Our Story</a>
          <a href="#team">The Team</a>
          <a href="#reviews">Reviews</a>
          <a href="#programs">Programs</a>
          <a href="#join">Join Us</a>
          <a href="sponsorup.html" className={"sponsor"}>
            Sponsor Us
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navigation;
