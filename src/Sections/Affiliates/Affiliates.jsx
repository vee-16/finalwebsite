import React, { Fragment } from "react";

import "./Affiliates.css";

import Marquee from "./Marquee/Marquee";
import { Universities } from "./data";

function Affiliates() {
  return (
    <Fragment>
      <div id="affiliates">
        <Marquee title={"Our Universities"} items={Universities} />
      </div>
    </Fragment>
  );
}

export default Affiliates;
