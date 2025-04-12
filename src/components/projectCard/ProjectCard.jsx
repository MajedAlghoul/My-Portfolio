import GlassContainer from "../glassContainer/GlassContainer.jsx";
import "./ProjectCard.css";
import React from "react";
import * as svgs from "../../assets/Svgs.jsx";

export default function ProjectCard({
  linkk,
  sLinkk,
  title,
  desc,
  year,
  langs,
  displayImg,
}) {
  const [sLinkkHover, setSLinkkHover] = React.useState(false);
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
          {displayImg ? (
            <img
              src={displayImg}
              style={{ width: "100%", marginBottom: "16px" }}
            />
          ) : null}

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
            <a
              href={sLinkk}
              target="_blank"
              style={{ textDecoration: "none", color: "#ffffff60" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderRadius: "999px",
                  paddingLeft: "8px",
                }}
                className={`${sLinkkHover ? "s-link-hover" : ""}`}
                onMouseEnter={() => setSLinkkHover(true)}
                onMouseLeave={() => setSLinkkHover(false)}
              >
                <span>Github</span>
                {svgs.diagonalArrow}
              </div>
            </a>
          </div>
        </div>
      </GlassContainer>
    </a>
  );
}
