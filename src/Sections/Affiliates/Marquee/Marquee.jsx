import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

import "./Marquee.css";

function Marquee({ title, items }) {
  var slides = items.map((i) => (
    <Fragment key={i.name}>
      <div className="slide">
        <img src={i.image} alt={i.name} />
      </div>
    </Fragment>
  ));

  const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(${-250 * slides.length}px));
  }
  `;

  const Scroll = styled.div`
    animation: ${scroll} 60s linear infinite;
    animation-play-state: ${slides.length < 3 ? "paused" : "running"};
    justify-content: ${slides.length < 3 ? "center" : "flex-start"};
    width: calc(${250 * slides.length * 2}px);
  `;

  return (
    <Fragment>
      <div className={"marquee"}>
        <h1>{title}</h1>
        <Scroll className="slide-track">{slides}{slides}{slides}{slides}</Scroll>
      </div>
    </Fragment>
  );
}

export default Marquee;
