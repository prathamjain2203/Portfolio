import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Mobilenav from "./Components/MobileNav/MobileNav";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mobilenav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
