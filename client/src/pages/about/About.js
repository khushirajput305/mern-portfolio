import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="profile.jpg" alt="profile" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
              I am Khushi Rajput, a third-year student at MLV Textile
              Engineering College and a dedicated MERN stack developer. My
              expertise spans MongoDB, Express.js, React.js, and Node.js,
              allowing me to create dynamic and efficient web applications. With
              a strong foundation in both front-end and back-end development,
              I’m passionate about turning innovative ideas into real-world
              solutions. As I continue to grow in my field, I’m committed
              to making impactful contributions to the tech industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
