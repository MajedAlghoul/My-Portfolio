import "./NavBar.css";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as svgs from "../../assets/Svgs.jsx";
export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleButtonClick = () => {
    window.location.href =
      "mailto:majed.alghoul3@gmail.com?subject=Project%20Inquiry";
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="nav-outer">
      <div className="nav-inbetween">
        <div className="nav-inner">
          <div className="nav-inner-wrapper">
            <button
              className={`nav-buttons ${
                isActive("/") ? "selected-button" : ""
              }`}
              onClick={() => navigateTo("/")}
            >
              I
            </button>
            <button
              className={`nav-buttons ${
                isActive("/themes") ? "selected-button" : ""
              }`}
              onClick={() => navigateTo("/themes")}
            >
              Themes
            </button>
            <button
              className={`nav-buttons ${
                isActive("/projects") ? "selected-button" : ""
              }`}
              onClick={() => navigateTo("/projects")}
            >
              Projects
            </button>
            <button
              className={`nav-buttons ${
                isActive("/pictures") ? "selected-button" : ""
              }`}
              onClick={() => navigateTo("/pictures")}
            >
              Pictures
            </button>
            <button
              className="nav-buttons connect-button"
              onClick={handleButtonClick}
            >
              Connect
            </button>
          </div>
        </div>
        <div
          className={`nav-social conditional-div ${
            location.pathname === "/"
              ? "home"
              : location.pathname === "/about"
              ? "about"
              : ""
          }`}
        >
          <div className="nav-inner-wrapper">
            <div className="social-container">
              <a
                className="social-tags"
                target="_blank"
                href="https://github.com/MajedAlghoul"
              >
                {svgs.githubLogo({ height: "22" })}
              </a>
              <a
                className="social-tags"
                target="_blank"
                href="https://x.com/majed_alghoul"
              >
                {svgs.xLogo({ height: "22" })}
              </a>
              <a
                className="social-tags"
                target="_blank"
                href="https://www.linkedin.com/in/majed-alghoul"
              >
                {svgs.linkedinLogo({ height: "22" })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
