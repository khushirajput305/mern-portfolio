import React from "react";
import Jump from "react-reveal/Jump"
import "./about.css";
const About = () => {
  return (
    <>
    <Jump>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="https://fi-hatchbox-production-uploads.s3.amazonaws.com/posts/44299297_s.jpg" alt="profile" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
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
      </Jump>
    </>
  );
};

export default About;
