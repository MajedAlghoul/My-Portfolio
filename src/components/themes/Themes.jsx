import "./Themes.css";
import React from "react";
import {
  wetTurqThumbWindow,
  wetTurqLogo,
  sweetMuskThumbWindow,
  sweetMuskLogo,
  paleBananaLogo,
  paleBananaThumbWindow,
} from "../../assets/Svgs.jsx";
import wetTurqThumbBackground from "../../assets/wetTurqBackground.png";
import sweetMuskThumbBackground from "../../assets/sweetMuskBackground.png";
import paleBananaThumbBackground from "../../assets/paleBananaBackground.png";
import ThemeCard from "../themeCard/ThemeCard.jsx";
import Grid from "../grid/Grid.jsx";
export default function Themes() {
  return (
    <div className="themes-outer">
      <Grid gridType="themes">
        <ThemeCard
          background={wetTurqThumbBackground}
          thmbWindow={wetTurqThumbWindow}
          logo={wetTurqLogo}
          title={"Wet Turquoise"}
          desc={"Chrome Theme"}
          linkk={
            "https://chromewebstore.google.com/detail/wet-turquoise/monldnmbjmekhjddmpegagaekcdgleek"
          }
          pColor={"#009c89"}
          sColor={"#d2ebe8"}
        ></ThemeCard>
        <ThemeCard
          background={sweetMuskThumbBackground}
          thmbWindow={sweetMuskThumbWindow}
          logo={sweetMuskLogo}
          title={"Sweet Muskmelon"}
          desc={"Chrome Theme"}
          linkk={
            "https://chromewebstore.google.com/detail/sweet-muskmelon/jjcgelmhhaldmodmbgielcpieelodofh"
          }
          pColor={"#ff916f"}
          sColor={"#ffdcd1"}
        ></ThemeCard>
        <ThemeCard
          background={paleBananaThumbBackground}
          thmbWindow={paleBananaThumbWindow}
          logo={paleBananaLogo}
          title={"Pale Banana"}
          desc={"Chrome Theme"}
          linkk={
            "https://chromewebstore.google.com/detail/pale-banana/behdbikklpdgcilgeaocajkjkopppjai"
          }
          pColor={"#ffb53a"}
          sColor={"#fee8d2"}
        ></ThemeCard>
      </Grid>
    </div>
  );
}
