import "./ThemeCard.css";
import React from "react";
import GlassContainer from "../glassContainer/GlassContainer.jsx";
import ColorCircle from "../colorCircle/ColorCircle.jsx";
export default function ThemeCard({
  background,
  thmbWindow,
  logo,
  title,
  desc,
  linkk,
  pColor,
  sColor,
}) {
  return (
    <GlassContainer w="426px" h="362px" c="30px" o="" m="32px" p="12px">
      <div className="themes-inner">
        <div className="theme-image-container">
          <img
            src={background}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              zIndex: "5",
            }}
          >
            {thmbWindow}
          </div>
        </div>
        <div className="theme-info-container">
          <div className="theme-info-container-inner">
            <div className="theme-info-left-box">
              {logo}

              <div
                style={{
                  fontSize: "13px",
                  marginLeft: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div>{title}</div>
                  <div style={{ fontSize: "10px", color: "#ffffff60" }}>
                    {desc}
                  </div>
                </div>
                <a target="_blank" href={linkk} className="theme-get-button">
                  Get
                </a>
              </div>
            </div>
            <div className="theme-info-right-box">
              <div>
                <ColorCircle sColor={pColor} />
              </div>
              <div style={{ marginTop: "10px" }}>
                <ColorCircle sColor={sColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassContainer>
  );
}
