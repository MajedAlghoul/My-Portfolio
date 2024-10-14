import React, { useState } from "react";
import "./ColorCircle.css";

const ColorCircle = ({ sColor }) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setCopied(false);
  };

  const handleClick = () => {
    navigator.clipboard
      .writeText(sColor)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div
      className="color-circle"
      style={{
        width: "18px",
        height: "18px",
        borderRadius: "999px",
        backgroundColor: sColor,
        border: "1px solid #ffffff",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {hovered && <div className="color-code">{sColor}</div>}
      {copied && <div className="copied-message">Copied!</div>}
    </div>
  );
};

export default ColorCircle;
