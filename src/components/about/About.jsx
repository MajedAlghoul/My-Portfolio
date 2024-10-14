import "./About.css";
import React from "react";
import GlassContainer from "../glassContainer/GlassContainer";
import Marquee from "../marquee/Marquee.jsx";
import * as svgs from "../../assets/Svgs.jsx";
import Grid from "../grid/Grid.jsx";
export default function About() {
  return (
    <div className="about-outer">
      <div className="about-inner">
        <Grid gridType="about">
          <div>
            <GlassContainer
              w="100%"
              h="auto"
              c="24px"
              o="none"
              b="none"
              btop="none"
            >
              <div className="hero-outer-container">
                <div className="hero-svg">{svgs.mFoldsLogo}</div>
                <div className="hero-text-container">
                  <div className="hero-txt-groups">Hi, Im Majed</div>
                  <div className="hero-txt-groups">
                    Developer <span>{svgs.sharpStar}</span> Designer
                  </div>
                  <div
                    className="hero-txt-groups"
                    style={{
                      color: "#ffffff50",
                      fontSize: "20px",
                      marginTop: "6px",
                    }}
                  >
                    based in Ramallah, PS
                  </div>
                </div>
              </div>
            </GlassContainer>
          </div>
          <div className="social-container-outer">
            <GlassContainer
              w="100%"
              h="62px"
              c="14px"
              o="none"
              b="none"
              btop="none"
            >
              <div className="social-container">
                <a
                  className="social-tags"
                  target="_blank"
                  href="https://github.com/MajedAlghoul"
                >
                  {svgs.githubLogo("")}
                </a>
                <a
                  className="social-tags"
                  target="_blank"
                  href="https://x.com/majed_alghoul"
                >
                  {svgs.xLogo("")}
                </a>
                <a
                  className="social-tags"
                  target="_blank"
                  href="https://www.linkedin.com/in/majed-alghoul"
                >
                  {svgs.linkedinLogo("")}
                </a>
              </div>
            </GlassContainer>
          </div>

          <GlassContainer
            w="100%"
            h="calc(auto + 100px)"
            c="14px"
            o="none"
            b="none"
            btop="none"
          >
            <div className="story-container" style={{ maxWidth: "840px" }}>
              <div>
                I always believed that small details matter, i also believe that
                using the right tool for the right job is a necessary
                requirement for producing a detail oriented product.
              </div>
              <div style={{ marginTop: "12px" }}>
                So then, ive been on the journey of acquiring the knowledge of
                these tools.
              </div>
              <div style={{ marginTop: "12px" }}>
                Through the journey, I found myself oriented more toward
                <span style={{ color: "#FFA600" }}> design</span>, so i pursued
                that on the side too.
              </div>
              <div style={{ marginTop: "12px" }}>
                My Plan is simple, produce{" "}
                <span style={{ color: "#FB6D3B" }}> quality</span> Web
                applications and Programs.
              </div>
              <div style={{ marginTop: "12px" }}>
                At the moment, im targeting Web development!
              </div>
            </div>
          </GlassContainer>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "16px",
            }}
          >
            <div style={{ maxWidth: "880px", width: "100%" }}>
              <GlassContainer
                w="100%"
                h="62px"
                c="14px"
                o=""
                p="1px"
                b="1px solid #00000006"
                btop="1px solid #ffffff16"
              >
                <Marquee>
                  <a href="https://react.dev/" target="_blank">
                    {svgs.reactLogo("")}
                  </a>
                  <a href="https://www.w3schools.com/js/" target="_blank">
                    {" "}
                    {svgs.jsLogo("")}
                  </a>
                  <a href="https://www.w3schools.com/html/" target="_blank">
                    {" "}
                    {svgs.htmlLogo("")}
                  </a>
                  <a href="https://www.w3schools.com/css/" target="_blank">
                    {" "}
                    {svgs.cssLogo("")}
                  </a>
                  <a
                    href="https://spring.io/projects/spring-boot"
                    target="_blank"
                  >
                    {" "}
                    {svgs.springBootLogo("")}
                  </a>
                  <a href="https://www.w3schools.com/java/" target="_blank">
                    {" "}
                    {svgs.javaLogo("")}
                  </a>
                  <a href="https://www.mysql.com/" target="_blank">
                    {" "}
                    {svgs.mysqlLogo("")}
                  </a>
                  <a href="https://www.postgresql.org/" target="_blank">
                    {" "}
                    {svgs.postgresLogo("")}
                  </a>
                  <a href="https://www.python.org/" target="_blank">
                    {" "}
                    {svgs.pythonLogo("")}
                  </a>
                  <a href="https://git-scm.com/" target="_blank">
                    {" "}
                    {svgs.gitLogo("")}
                  </a>
                  <a href="https://www.docker.com/" target="_blank">
                    {" "}
                    {svgs.dockerLogo("")}{" "}
                  </a>
                  <a href="https://www.figma.com/" target="_blank">
                    {" "}
                    {svgs.figmaLogo("")}
                  </a>
                  <a href="https://code.visualstudio.com/" target="_blank">
                    {" "}
                    {svgs.vsCodeLogo("")}{" "}
                  </a>
                  <a href="https://www.jetbrains.com/idea/" target="_blank">
                    {" "}
                    {svgs.intillijiLogo("")}{" "}
                  </a>
                  <a href="https://obsidian.md/" target="_blank">
                    {" "}
                    {svgs.obsidianLogo("")}{" "}
                  </a>
                </Marquee>
              </GlassContainer>
            </div>
          </div>
          <div className="arrows-container" style={{ marginTop: "16px" }}>
            {svgs.arrowsDemo}
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <GlassContainer
              w="100%"
              h="488px"
              c="14px"
              o="none"
              b="none"
              m={"0px"}
              btop="none"
            >
              <div className="ach-container" style={{ maxWidth: "540px" }}>
                <div style={{ position: "absolute", top: "0" }}>
                  <GlassContainer
                    w="240px"
                    h="88px"
                    c="14px"
                    o=""
                    m="32px"
                    r="rotate(-4deg)"
                  >
                    <div
                      style={{
                        color: "#ffffff60",
                        width: "100%",
                        height: "100%",
                        fontSize: "14px",
                      }}
                    >
                      <div style={{ color: "#ffffff", fontSize: "18px" }}>
                        BS. Computer Science
                      </div>
                      <div>Birzeit University</div>
                      <div>2020-2024</div>
                    </div>
                  </GlassContainer>
                </div>
                <div style={{ position: "absolute", right: "0", top: "140px" }}>
                  <GlassContainer
                    w="240px"
                    h="100px"
                    c="14px"
                    o=""
                    m="32px"
                    r="rotate(4deg)"
                  >
                    <div
                      style={{
                        color: "#ffffff60",
                        width: "100%",
                        height: "100%",
                        fontSize: "14px",
                      }}
                    >
                      <div style={{ color: "#ffffff", fontSize: "18px" }}>
                        IEEE Paper Publish
                      </div>
                      <div>
                        Policy Peek: Privacy Policy Analysis Browser Extension
                      </div>
                      <div>2024</div>
                    </div>
                  </GlassContainer>
                </div>
                <div style={{ position: "absolute", top: "300px" }}>
                  <GlassContainer
                    w="266px"
                    h="88px"
                    c="14px"
                    o=""
                    m="32px"
                    r="rotate(-4deg)"
                  >
                    <div
                      style={{
                        color: "#ffffff60",
                        width: "100%",
                        height: "100%",
                        fontSize: "14px",
                      }}
                    >
                      <div style={{ color: "#ffffff", fontSize: "18px" }}>
                        Nano Degree: Ai using Python
                      </div>
                      <div>Udacity</div>
                      <div>2024</div>
                    </div>
                  </GlassContainer>
                </div>
              </div>
            </GlassContainer>
          </div>
        </Grid>
      </div>
    </div>
  );
}
