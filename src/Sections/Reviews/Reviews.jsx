import React, { Fragment } from "react";
import "./Reviews.css";

import Review from "./Review/Review";
import { UserReviews } from "./data.tsx";

function Reviews() {
  const reviewList = UserReviews.map((r) => {
    return <Review key={r.name} review={r} />;
  });

  var pivot = 2;

  function moveLeft() {
    pivot = pivot - 3 < 2 ? 2 : pivot - 3;
    move();
  }

  function moveRight() {
    const max = UserReviews.length - 1;
    pivot = pivot + 3 > max ? max : pivot + 3;
    move();
  }

  function move() {
    const element = document.getElementById("review" + pivot);
    element.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <Fragment>
      <div id="reviews">
        <h1>Reviews</h1>
        <h2>Check out what our past interns think about our programs.</h2>
        <div className="list">
          <button onClick={moveLeft} className="material-icons">
            chevron_left
          </button>
          <div id="brett" className="carousel">
            {reviewList}
          </div>
          <button onClick={moveRight} className="material-icons">
            chevron_right
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Reviews;
