import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Education from "./pages/education/Education";
import Project from "./pages/projects/Project";
import Techstack from "./pages/Techstack/Techstack";
import Experience from "./pages/workExperience/Experience";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Project />
        <Experience />
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made by ❤️ khushirajput &copy; 2024</h4>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
