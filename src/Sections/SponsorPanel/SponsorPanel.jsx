import React, { Fragment } from "react";

import "./SponsorPanel.css";

function SponsorPanel() {
  function hideSponsorPanel() {
    var panel = document.getElementById("sponsorPanel");
    panel.style.opacity = "0";
    window.setTimeout(function () {
      panel.style.display = "none";
    }, 500);
  }

  return (
    <Fragment>
      <div id={"sponsorPanel"}>
        <div id={"panel"}>
          <div>
            <a className={"material-icons"} onClick={hideSponsorPanel}>
              close
            </a>
          </div>
          <h1>SponsorUp</h1>
          <label>
            Are you an individual looking for a boost in connections or a company
            searching for long-term lead generation? <strong><em>Well, you've come to the right place.</em></strong>
          </label>
          <label>
            Become a LawyerUp sponsor today and<br></br>take your brand to the next level.
          </label>
          <a href="../../src/Sections/SponsorPanel/index.html">SignUp Today!</a>
        </div>
      </div>
    </Fragment>
  );
}

export default SponsorPanel;
