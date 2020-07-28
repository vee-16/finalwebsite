import React, { Fragment } from "react";
import "./Panel.css";
import icon_linkedin from "../../../Images/icons/icon_linkedin.svg";

function Panel({ continent, directors }) {
  const id = continent.toLowerCase().replace(/\s/g, "") + "Panel";
  const directorList = directors.map((d) => (
    <Fragment key={d.name}>
      <div className="director">
        <img src={d.image} alt="test" />
        <div className="content">
          <h1>
            {d.name} <a hidden={d.link ? false : true} href={d.link}><img src={icon_linkedin} alt={"linkedIn"} /></a>
          </h1>
          <label>{d.bio}</label>
        </div>
      </div>
    </Fragment>
  ));

  return (
    <Fragment>
      <div id={id} className={"panel"}>
        <h1>
          {continent} Director{directors.length > 1 ? "s" : ""}
          <button className={"material-icons"}>close</button>
        </h1>
        {directorList}
      </div>
    </Fragment>
  );
}

export default Panel;
