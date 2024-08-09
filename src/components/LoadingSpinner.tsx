import React from "react";
import FadeIn from "./FadeIn";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FadeIn duration={0.3}>
        <div className="loader">
          <div className="spinner"></div>
          <span style={{ color: "rgba(76, 175, 80)" }}>J</span>
        </div>
      </FadeIn>
    </div>
  );
};

export default LoadingSpinner;
