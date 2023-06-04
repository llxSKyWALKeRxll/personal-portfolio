import React from "react";
import "./ResumeCV.css";

const ResumeCV = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1CWpABxuzRgbhvy_LR25DuhuSrqQRhvWA/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="resume">
      <h1>Resume/CV</h1>
      <p>Click the button below to view my resume:</p>
      <button className="resume-button" onClick={handleResumeClick}>
        View Resume
      </button>
    </div>
  );
};

export default ResumeCV;
