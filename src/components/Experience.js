import React from "react";
import "./Experience.css";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const experiencesData = [
    {
      companyName: "Adda247",
      role: "SDE Intern",
      logo: "https://play-lh.googleusercontent.com/qGOg7iaWSfAiRBIIg5TMqWVYMZc9U-N9PjO1JDkHC8pVFFIDmH17wQ_81utVASn23g",
      location: "Gurugram",
      startDate: "Jul 2022",
      endDate: "Present",
      keyPoints: [
        "Optimized an entire existing micro-service by learning new tools and tech stack, resulting in a 4x increase in throughput",
        "Designed efficient APIs from scratch that met industry standards",
        "Collaborated with various teams, including seniors, to deliver projects and features while identifying and addressing bottlenecks",
        "Handled an entire major project individually, including designing and coding optimal APIs from scratch, and conducting meetings with the product, quality assurance, and front-end teams to deliver the project ahead of the deadline",
        "Tech used: Java, Spring Boot, Golang, Lua, Sql, ElasticSearch, Redis, MongoDB, Postman, Git, Linux",
      ],
    },
    {
      companyName: "Samsung",
      role: "Prism Research Intern",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png",
      location: "Remote",
      startDate: "Nov 2021",
      endDate: "May 2022",
      keyPoints: [
        "Conducted literature survey on the basics of 5G RAN & its previous counterparts",
        "Documentation on challenges & causes related to energy consumption in different 5G deployment scenarios, energy consumption trends in various 5G RAN network elements & methods, metrics and KPIs to measure energy efficiency of 5G RAN network elements",
        "Studied various solutions in order to improve the energy efficiency of 5G RAN",
        "Tech used: Linux, Ns3, C++",
      ],
    },
    {
      companyName: "OpenGenus Foundation",
      role: "Algorithm & Data Structure Developer, Intern",
      logo: "https://avatars.githubusercontent.com/u/18506046?s=280&v=4",
      location: "Remote",
      startDate: "Jun 2021",
      endDate: "Sep 2021",
      keyPoints: [
        "Wrote informative & explanatory articles on various topics ranging from recursive backtracking to probabilistic algorithms, bitwise operations, opengl & analysis of various algorithms",
        "Implemented Xiaolin Wu’s Line Drawing algorithm with anti-aliasing",
        "Contributed to the book titled ”Time Complexity Analysis”",
        "Won new user of the month award for excellent overall contributions",
        "Tech used: Python, Java, Markdown, Latex",
      ],
    },
    // Add more experiences here
  ];

  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-list">
        {experiencesData.map((experience, index) => (
          <div key={index}>
            <ExperienceItem experience={experience} />
            {index !== experiencesData.length - 1 && (
              <hr className="horizontal-line" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
