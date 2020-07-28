import React, { Fragment } from "react";
import "./Program.css";

function Program({ id, name, description, image, logo, released, button }) {
  function showDetails() {
    const title = document.getElementById(id + "Title").style;
    const description = document.getElementById(id + "Description").style;
    const indicator = document.getElementById(id + "Indicator").style;
    const logo = document.getElementById(id + "Logo").style;
    const more = document.getElementById(id + "More")?.style;

    if (indicator.display !== "none") {
      indicator.color = "transparent";
      logo.opacity = "0";
      window.setTimeout(function () {
        indicator.display = "none";
        logo.display = "none";
        title.display = "flex";
        description.display = "flex";
        if (more) more.display = "flex";
      }, 500);
      window.setTimeout(function () {
        title.color = "white";
        description.color = "white";
        if (more) more.opacity = "1";
      }, 1000);
    } else {
      title.color = "transparent";
      description.color = "transparent";
      if (more) more.opacity = "0";
      window.setTimeout(function () {
        title.display = "none";
        description.display = "none";
        if (more) more.display = "none";
        indicator.display = "flex";
        logo.display = "flex";
      }, 500);
      window.setTimeout(function () {
        indicator.color = "white";
        logo.opacity = "1";
      }, 1000);
    }
  }

  var indicator;
  if (released) {
    indicator = (
      <label className="indicator" id={id + "Indicator"}>
        <i className="material-icons">expand_more</i>
        Click to view more information
        <i className="material-icons">expand_more</i>
      </label>
    );
  } else {
    indicator = (
      <label className="indicator" id={id + "Indicator"}>
        Coming soon
      </label>
    );
  }

  var more;
  if (button) {
    more = (
      <a href={button.link} className={"more"} id={id + "More"}>
        {button.text}
        <i className={"material-icons"}>arrow_forward</i>
      </a>
    );
  }

  return (
    <Fragment>
      <div
        id={id}
        className="program"
        onClick={released ? showDetails : ""}
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <h1 id={id + "Title"}>{name}</h1>
        <label className="description" id={id + "Description"}>
          {description}
        </label>
        <img id={id + "Logo"} src={logo} alt="" />
        {more}
        {indicator}
      </div>
    </Fragment>
  );
}

export default Program;
