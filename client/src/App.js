import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";
import Project from "./pages/projects/Project";
import Techstack from "./pages/Techstack/Techstack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Techstack/>
        <Project/>
      </div>
    </>
  );
}

export default App;
