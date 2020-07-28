import React, { Fragment } from "react";
import "./Team.css";

import Map from "./map.jsx";
import { team } from "./data.jsx";

import Panel from "./Panel/Panel";

function Team() {
  function presentPanel() {
    var panel = document.getElementById("foundingPanel");
    panel.getElementsByTagName("button")[0].onclick = function () {
      hidePanel(panel);
    };

    panel.style.visibility = "visible";
    window.setTimeout(function () {
      panel.style.opacity = "1";
    }, 500);
  }

  function hidePanel(panel) {
    panel.style.opacity = "0";
    window.setTimeout(function () {
      panel.style.visibility = "hidden";
    }, 500);
  }

  return (
    <Fragment>
      <div id="team">
        <h1>The Team</h1>
        <h2>Interact with our map to meet our Continental Directors.</h2>
        <Map />
        <button onClick={presentPanel}>Meet the Founder</button>
        <Panel continent={"Asia"} directors={team.asia} />
        <Panel continent={"Africa"} directors={team.africa} />
        <Panel continent={"Europe"} directors={team.europe} />
        <Panel continent={"North America"} directors={team.northAmerica} />
        <Panel continent={"Founding"} directors={team.founder} />
      </div>
    </Fragment>
  );
}

export default Team;
