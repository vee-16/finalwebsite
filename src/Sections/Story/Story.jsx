import React, { Fragment } from "react";
import "./Story.css";

function Story() {
  function createMarkup() {
    const story = [
      "When COVID-19 hit, our summer plans became things of the past. Administrations closed schools. Students returned home. And companies cancelled internships. But our founder, <a href='https://www.linkedin.com/in/umeeshadalwis/' target={'_blank'}><strong>Umeesha D'Alwis</strong></a>, found a creative way to bring <em>some</em> of those plans back.",
      "After having three legal internships rescinded, she started thinking: <strong><em> What's the goal behind a legal internship?</em></strong>",
      "Well, legal internships help us gain knowledge about a specific law sector. And that's what our LawyerUp internship strives to do, but we don't just focus on one sector. We invite distinguished lawyers from 30+ sectors to help our Interns find their passions and decide their future areas of expertise. We also invite award-winning career coaches to teach our Interns resume/CV techniques, LinkedIn profile development, interview preparation, salary negotiation, and everything else in between.",
        "<strong>But that's not all.</strong> Our ScholarUp program allows students to research some of the biggest legal debates with the opportunity for their work to be showcased amongst thousands of legal professionals.",
        "Our LevelUp program works to provide the top classes in all things law-related to prepare our students to succeed in their careers, no matter what sector they pursue.",
        "So, if you're a student interested in developing your legal knowledge or a practicing legal professional looking for ways to give back,<strong> you're at the best place to start.</strong>",
    ];

    return {
      __html:
        "<p>" +
        story.map((s) => {
          return s + "<br></br>";
        }).join("") +
        "</p>"
    };
  }
  return (
    <Fragment>
      <div id="story">
        <h1>OUR STORY</h1>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </Fragment>
  );
}

export default Story;
