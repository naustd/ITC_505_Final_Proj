import "./About.css";
import React from "react";
import orgfoodImg from "./Assets/organic_foods.jpg";
import eathealthImg from "./Assets/foods1.jpg";
import farmersImage from "./Assets/farmersImg.jpg";
function About() {
  return (
    <div>
      <div className="heading">
        <h1>About Us</h1>
        <p>Organic foods makes lives healthy.</p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src={orgfoodImg} alt="orgFoodImg" />
          </div>
          <div className="about-content">
            <h2>Organic Foods.</h2>
            <p>
              We welcome you to Organic Food Paradise, where we explore how to
              live a healthy and sustainable life. In this website, you will
              find useful information, resources, and inspiration for people
              interested in organic food choices and a healthier lifestyle.
            </p>
            <a href="" className="read-more">
              Read More
            </a>
          </div>
        </section>
        <section className="about">
          <div className="about-content">
            <h2>
              Every bite counts. Choose organic for a healthier you and a
              sustainable future.
            </h2>
            <p>
              By choosing organic, you're minimizing exposure to harmful
              pesticides and supporting sustainable agricultural practices,
              promoting personal well-being and reducing environmental impact.
            </p>
            <a href="" className="read-more">
              Learn More
            </a>
          </div>
          <div className="about-image">
            <img src={eathealthImg} alt="eatHealthImg" />
          </div>
        </section>
        <section className="about">
          <div className="about-image">
            <img src={farmersImage} alt="famersImg" />
          </div>
          <div className="about-content">
            <h2>Support your local farmers, choose organic.</h2>
            <p>
              You can invest in healthier, fresher produce by choosing organic
              and supporting local farmers. You can also promote community
              resilience, reduce environmental impact, and create a stronger,
              more sustainable food system.
            </p>
            <a href="" className="read-more">
              Read More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
