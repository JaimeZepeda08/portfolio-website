import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="loader">
        <div className="spinner"></div>
        <span style={{ color: "rgba(76, 175, 80)" }}>J</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
