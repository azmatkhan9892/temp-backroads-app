import React from "react";
import abtImage from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section class="section" id="about">
      <Title title="ABOUT" subTitle="US" />
      <div class="section-center about-center">
        <div class="about-img">
          <img src={abtImage} class="about-photo" alt="awesome beach" />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#about" class="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
