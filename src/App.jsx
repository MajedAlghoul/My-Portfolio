import "./App.css";
import Background from "./components/background/Background.jsx";
import React from "react";
import NavBar from "./components/navBar/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About.jsx";
import Themes from "./components/themes/Themes.jsx";
import Projects from "./components/projects/Projects.jsx";
import Pictures from "./components/pictures/Pictures.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <Router>
      <Background>
        <NavBar />
        <div className="content-houser">
          <div className="inner-houser">
            <div className="nav-dodger">
              <Routes>
                <Route exact path="/" element={<About />} />
                <Route path="/themes" element={<Themes />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/pictures" element={<Pictures />} />
              </Routes>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </Background>
    </Router>
  );
}

export default App;
