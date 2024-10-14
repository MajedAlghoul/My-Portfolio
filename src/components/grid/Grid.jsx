import "./Grid.css";
import React from "react";
function Grid({ gridType, children }) {
  return <div className={`grid ${gridType}`}>{children}</div>;
}

export default Grid;
