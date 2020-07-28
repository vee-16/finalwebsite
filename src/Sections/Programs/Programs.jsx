import React, { Fragment } from "react";
import "./Programs.css";

import Program from "./Program/Program";
import Programs1 from "../../Images/backgrounds/programs1.png";
import Programs2 from "../../Images/backgrounds/programs2.png";
import Programs3 from "../../Images/backgrounds/programs3.png";
import lawyerUpLogo from "../../Images/logos/lawyerUpLogo-white.svg";
import scholarUpLogo from "../../Images/logos/scholarUpLogo-white.svg";
import levelUpLogo from "../../Images/logos/levelUpLogo-white.svg";

function Programs() {
  const data = [
    {
      id: "lawyerup",
      name: "LawyerUp Internship",
      description:
        "Every summer, for 8 weeks, LawyerUp hosts a virtual internship with distinguished attorneys, legal recruiters, and career coaches from 30+ law sectors. Our lawyers discuss their client type, fictitious cases, and daily procedures involved in their specific field while our coaches teach students resume, CV, LinkedIn, interview, and salary negotiation techniques to better our careers. Simply put, LawyerUp interns become well-rounded individuals with a better understanding of how to succeed.",
      image: Programs1,
      logo: lawyerUpLogo,
      released: true,
        button: {
        text: "Video Coming Soon!",
        link: "",
      },
    },
    {
      id: "scholarup",
      name: "ScholarUp Research",
      description:
        "Every summer, for 5 weeks, ScholarUp hosts a virtual research experience where candidates can debate various landmark cases and legal issues. With open inquiry and creativity at the heart of our program, we encourage our students to write an article, draw a creative piece, or organize a presentation based on the information they learn. Then, the best submission, known as a Featured Scholar, is published on our company website and social media to help our lawyers scout the best Interns for their law firms.",
      image: Programs2,
      logo: scholarUpLogo,
      released: true,
      button: {
        text: "ScholarUp 2020 Research",
        link: "https://medium.com/@lawyerupinternship",
      },
    },
    {
      id: "levelup",
      name: "LevelUp Lessons",
      description:
        "Although our internships are only available during the summer, we know that career development is an all-year round task. So, LevelUp partners with award-winning attorneys, law school professors, and the most successful recent law graduates to provide legal classes on all things law-related. From a step-by-step application guide that teaches you how to secure a top law firm internship to a case study on how to write an intensive contract, you'll learn all the skills you need to succeed in law.",
      image: Programs3,
      logo: levelUpLogo,
      released: true,
         button: {
        text: "Coming Soon!",
        link: "",
      },
    },
  ];

  const programs = data.map((p) => (
    <Fragment key={p.name}>
      <Program
        id={p.id}
        name={p.name}
        description={p.description}
        image={p.image}
        logo={p.logo}
        released={p.released}
        button={p.button}
      />
    </Fragment>
  ));

  return (
    <Fragment>
      <div id="programs">
        <h1>Programs</h1>
          <h2>Check out our summer internships and academic year programs.</h2>
        <div className="list">{programs}</div>
      </div>
    </Fragment>
  );
}

export default Programs;
