import "./GlassContainer.css";
import React from "react";
export default function GlassContainer({
  w,
  h,
  c,
  o,
  m,
  r,
  p,
  b,
  btop,
  children,
}) {
  return (
    <div
      className="g-outer"
      style={{
        width: w,
        height: h,
        borderRadius: c,
        background: o,
        boxShadow: o,
        backdropFilter: o,
        border: o,
        marginTop: m,
        transform: r,
        border: b,
        borderTop: btop,
      }}
    >
      <div
        className="g-inner"
        style={{ width: `calc(100% - ${p})`, height: `calc(100% - ${p})` }}
      >
        {children}
      </div>
    </div>
  );
}
