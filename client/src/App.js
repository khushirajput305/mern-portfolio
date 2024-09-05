import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Education from "./pages/education/Education";
import Project from "./pages/projects/Project";
import Techstack from "./pages/Techstack/Techstack";
import Experience from "./pages/workExperience/Experience";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Project />
          <Experience />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made by ❤️ khushirajput &copy; 2024</h4>
          </Tada>
        </div>
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
