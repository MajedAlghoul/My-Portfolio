import GlassContainer from "../glassContainer/GlassContainer";
import "./Footer.css";
import React from "react";
export default function Footer() {
  return (
    <div className="footer-outer">
      <GlassContainer w="100%" h="100%" c="0" o="" m="0px">
        <div className="footer-logo-container">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_bd_153_224)">
              <path
                d="M14.6735 6.19068L13.0853 2.73066L11.5267 6.30976C11.2843 6.86633 11.2922 7.50011 11.5484 8.05045L12.4402 9.96613C12.6926 10.5083 13.4625 10.5112 13.7189 9.97088L14.6621 7.98353C14.9309 7.41703 14.9351 6.76057 14.6735 6.19068Z"
                stroke="#FF7D45"
                strokeWidth="1.41296"
              />
              <path
                d="M11.4632 19.8093L13.0514 23.2693L14.61 19.6902C14.8524 19.1336 14.8445 18.4998 14.5883 17.9495L13.6965 16.0338C13.4441 15.4916 12.6742 15.4887 12.4178 16.0291L11.4746 18.0164C11.2058 18.5829 11.2016 19.2394 11.4632 19.8093Z"
                stroke="#FF7D45"
                strokeWidth="1.41296"
              />
              <path
                d="M19.8095 14.6758L23.2695 13.0876L19.6904 11.5289C19.1339 11.2865 18.5001 11.2945 17.9497 11.5506L16.034 12.4424C15.4918 12.6948 15.489 13.4647 16.0293 13.7212L18.0167 14.6643C18.5831 14.9332 19.2396 14.9373 19.8095 14.6758Z"
                stroke="#FF7D45"
                strokeWidth="1.41296"
              />
              <path
                d="M6.19049 11.4654L2.73048 13.0536L6.30958 14.6123C6.86614 14.8546 7.49992 14.8467 8.05026 14.5905L9.96595 13.6987C10.5082 13.4463 10.511 12.6764 9.97069 12.42L7.98335 11.4769C7.41685 11.208 6.76038 11.2038 6.19049 11.4654Z"
                stroke="#FF7D45"
                strokeWidth="1.41296"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_153_224"
                x="-1.20795"
                y="-1.20777"
                width="28.4159"
                height="28.4155"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="1.10397"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_153_224"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.0479989" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_153_224"
                  result="effect2_dropShadow_153_224"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_153_224"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <div className="footer-logo-text">Majed Alghoul</div>
        </div>
      </GlassContainer>
    </div>
  );
}
