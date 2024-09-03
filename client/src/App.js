import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Project from "./pages/projects/Project";
import Techstack from "./pages/Techstack/Techstack";
import Experience from "./pages/workExperience/Experience";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education/>
        <Techstack/>
        <Project/>
        <Experience/>
      </div>
    </>
  );
}

export default App;
