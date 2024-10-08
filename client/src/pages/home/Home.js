import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import { BsFillSunFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";

import Resume from "../../assets/docs/MyResume.pdf";
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <MdOutlineDarkMode size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi👋 I'm a </h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer !", "MERN Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href={`https://api.whatsapp.com/send?phone=${process.env.WHATSAPP_API_NUMBER}`}
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>

              <a
                className="btn btn-cv"
                href={Resume}
                download={"your_name.pdf"}
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
