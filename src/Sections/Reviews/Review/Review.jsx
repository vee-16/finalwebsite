import React, { Fragment } from "react";
import "./Review.css";

function Review({ review }) {
  return (
    <Fragment>
      <div id={"review" + review.id} className={"review"} key={review.name}>
        <img src={review.image} alt={review.name} />
        <p>{review.text}</p>
        <label>
          {review.name} ({review.year})
        </label>
      </div>
    </Fragment>
  );
}

export default Review;
