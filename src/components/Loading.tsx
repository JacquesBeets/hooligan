import React from "react";
import LoadingSVG from "../assets/loader.svg"

function LoadingAnimation() {
    return (
      <div className="loadingContainer">
            <img src={LoadingSVG} alt="Loader" />
      </div>
    );
  }
  
  export default LoadingAnimation;