import React, { Fragment } from "react";
import "./App.css";

import Navigation from "./Sections/Navigation/Navigation";
import Landing from "./Sections/Landing/Landing";
import Story from "./Sections/Story/Story";
import Affiliates from "./Sections/Affiliates/Affiliates";
import Team from "./Sections/Team/Team";
import Reviews from "./Sections/Reviews/Reviews";
import Programs from "./Sections/Programs/Programs";
import Join from "./Sections/Join/Join";
import SponsorPanel from "./Sections/SponsorPanel/SponsorPanel";

function App() {
  return (
    <Fragment>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/8100128.js"
      ></script>
      <Navigation />
      <main>
        <Landing />
        <Story />
        <Team />
        <Reviews />
        <Programs />
        <Join />
        <SponsorPanel />
      </main>
    </Fragment>
  );
}

export default App;
