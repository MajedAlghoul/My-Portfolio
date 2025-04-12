import Grid from "../grid/Grid";
import "./Projects.css";
import React from "react";
import * as svgs from "../../assets/Svgs.jsx";
import ProjectCard from "../projectCard/ProjectCard.jsx";
import tripplannerimg from "../../assets/tripplannerimg.png";
import polarityanalyzerimg from "../../assets/polarityanalyzerimg.png";
export default function Projects() {
  return (
    <div className="projects-outer">
      <Grid gridType="projects">
        <ProjectCard
          linkk="https://majedalghoul.github.io/polarity/polarityanalyzer"
          sLinkk={"https://github.com/MajedAlghoul/udacity-frontend-project4"}
          title="Article Polarity Analyzer"
          desc="Analyze the polarity of an article using ML"
          year="2025"
          langs={[svgs.jsLogo, svgs.gitLogo, svgs.vsCodeLogo]}
          displayImg={polarityanalyzerimg}
        ></ProjectCard>
        <ProjectCard
          linkk="https://majedalghoul.github.io/tripplanner/tripplanner"
          sLinkk={
            "https://github.com/MajedAlghoul/udacity-frontend-project5-final"
          }
          title="Trip Planner"
          desc="Plan your trips and destinations"
          year="2025"
          langs={[svgs.jsLogo, svgs.gitLogo, svgs.vsCodeLogo]}
          displayImg={tripplannerimg}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/material-newtab"
          title="Material Newtab"
          desc="A new tab replacement for chromium browsers"
          year="2024"
          langs={[
            svgs.reactLogo,
            svgs.jsLogo,
            svgs.htmlLogo,
            svgs.cssLogo,
            svgs.figmaLogo,
            svgs.gitLogo,
            svgs.vsCodeLogo,
          ]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/inventory-management-system"
          title="Inventory Management System"
          desc="IMS built using spring boot and java"
          year="2024"
          langs={[
            svgs.springBootLogo,
            svgs.javaLogo,
            svgs.mysqlLogo,
            svgs.dockerLogo,
            svgs.gitLogo,
            svgs.intillijiLogo,
          ]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/dynamic-coins-game"
          title="Turn Based Coins Game"
          desc="Compete against an optimal AI"
          year="2023"
          langs={[svgs.javaLogo, svgs.gitLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/LeetCode-problems"
          title="LeetCode Solutions"
          desc="My solution to LeetCode Problems"
          year="-"
          langs={[svgs.javaLogo, svgs.gitLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/python_web_server"
          title="Web Live Server"
          desc="Web server using web sockets in python"
          year="2023"
          langs={[
            svgs.pythonLogo,
            svgs.htmlLogo,
            svgs.cssLogo,
            svgs.gitLogo,
            svgs.vsCodeLogo,
          ]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/flower-image-classifier"
          title="Flower Image Classifier"
          desc="detect flower types using ML & python"
          year="2023"
          langs={[svgs.pythonLogo, svgs.gitLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/simple_syntax_parser"
          title="Custom Language Syntax Parser"
          desc="Check code against a defined language rules"
          year="2023"
          langs={[svgs.javaLogo, svgs.gitLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/Room-reservation-system"
          title="Room Reservation System"
          desc="RRS built in java"
          year="2023"
          langs={[svgs.javaLogo, svgs.mysqlLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/x86-avg-calculator"
          title="Two variable numbers division"
          desc="divide custom sized variables in assymbly"
          year="2023"
          langs={[svgs.gitLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/shortest-airline-path"
          title="Shortest Airline Path Finder"
          desc="Find shortest paths between countries accourding to predefined criteria"
          year="2023"
          langs={[svgs.javaLogo, svgs.gitLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
        <ProjectCard
          linkk="https://github.com/MajedAlghoul/simple-huffman-compression"
          title="File Compresser"
          desc="Compress Files using Huffman algorithm"
          year="2023"
          langs={[svgs.javaLogo, svgs.gitLogo, svgs.vsCodeLogo]}
        ></ProjectCard>
      </Grid>
    </div>
  );
}
