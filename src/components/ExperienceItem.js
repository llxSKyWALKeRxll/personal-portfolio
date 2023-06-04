import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ experience }) => {
  const { companyName, role, logo, location, startDate, endDate, keyPoints } =
    experience;

  return (
    <div className="experience-item">
      <div className="company-details">
        <div className="company-logo">
          <img src={logo} alt={companyName} />
        </div>
        <div className="company-info">
          <div className="company-name">{companyName}</div>
          <div className="role">{role}</div>
          <div className="duration-location">
            <span className="title">Duration:</span>
            <span className="duration">
              {startDate} - {endDate}
            </span>
            <span className="title"> Location:</span>
            <span className="location">{location}</span>
          </div>
          <ul className="key-points">
            {keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

export default ExperienceItem;
