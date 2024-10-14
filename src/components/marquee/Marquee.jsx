import React, { useEffect, useRef, useState } from "react";
import "./Marquee.css";

const Marquee = ({ children }) => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  const outerContainerRef = useRef(null);
  const animationRef = useRef(null);
  const [marginn, setMarginn] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1406) {
        setMarginn(52);
      } else {
        setMarginn(32);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const container = containerRef.current;

    let totalWidth = 0;
    Array.from(container.children).forEach((child) => {
      totalWidth += child.offsetWidth + marginn;
    });

    const initialPosition = -outerContainerRef.current.clientWidth / 2;
    let offset = initialPosition;

    const animate = () => {
      offset += 1;

      if (offset >= totalWidth / 2 + initialPosition) {
        offset = initialPosition;
      }

      marquee.style.transform = `translateX(${offset}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const items = outerContainerRef.current;
    //items.forEach((item) => {
    items.addEventListener("mouseenter", () =>
      cancelAnimationFrame(animationRef.current)
    );
    items.addEventListener("mouseleave", animate);
    //});

    return () => {
      cancelAnimationFrame(animationRef.current);
      //items.forEach((item) => {
      items.removeEventListener("mouseenter", () =>
        cancelAnimationFrame(animationRef.current)
      );
      items.removeEventListener("mouseleave", animate);
      //});
    };
  }, [children, marginn]);

  return (
    <div className="marquee-container" ref={outerContainerRef}>
      <div className="marquee-wrapper" ref={marqueeRef}>
        <div className="marquee-content" ref={containerRef}>
          {children.map((child, index) => (
            <div key={index} className="marquee-item">
              {child}
            </div>
          ))}
          {children.map((child, index) => (
            <div key={`${index}-duplicate`} className="marquee-item">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
