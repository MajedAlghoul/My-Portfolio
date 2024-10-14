import React, { useEffect, useRef, useState } from "react";
import "./Background.css";
import vidd from "../../assets/Mountains44.mp4";

export default function Background({ children }) {
  const videoRef = useRef(null);
  const [isReversed, setIsReversed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    function reverseVideo() {
      let interval = setInterval(() => {
        video.currentTime -= 0.012;
        if (video.currentTime <= 0) {
          clearInterval(interval);
          video.play();
        }
      }, 16);
    }

    const handleVideoEnd = () => {
      const buffer = 0.2;
      if (!isReversed && video.currentTime >= video.duration - buffer) {
        setIsReversed(true);
        video.pause();
        reverseVideo();
      } else if (isReversed && video.currentTime <= buffer) {
        setIsReversed(false);
        video.pause();
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleVideoEnd);

    return () => {
      video.removeEventListener("timeupdate", handleVideoEnd);
    };
  }, [isReversed]);

  return (
    <>
      <video ref={videoRef} autoPlay muted className="vid">
        <source src={vidd} type="video/mp4" />
      </video>
      <div className="blur">
        <div className="actual-content">{children}</div>
      </div>
    </>
  );
}
