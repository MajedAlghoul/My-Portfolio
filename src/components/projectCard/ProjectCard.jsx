import GlassContainer from "../glassContainer/GlassContainer.jsx";
import "./ProjectCard.css";
import React from "react";
import * as svgs from "../../assets/Svgs.jsx";
export default function ProjectCard({ linkk, title, desc, year, langs }) {
  return (
    <a target="_blank" href={linkk} style={{ textDecoration: "none" }}>
      <GlassContainer w="280px" h="auto" c="14px" o="">
        <div
          style={{
            color: "#ffffff60",
            width: "100%",
            height: "100%",
            fontSize: "14px",
            marginTop: "16px",
          }}
        >
          <div
            style={{ color: "#ffffff", fontSize: "18px", marginBottom: "4px" }}
          >
            {title}
          </div>
          <div>{desc}</div>
          <div style={{ display: "flex", marginTop: "16px" }}>
            {langs.map((Element, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                <Element height="20"></Element>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "14px",
              width: "100%",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div>{year}</div>
            {svgs.diagonalArrow}
          </div>
        </div>
      </GlassContainer>
    </a>
  );
}
