import "./App.css";
import Layout from "./components/Layout/Layout";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
