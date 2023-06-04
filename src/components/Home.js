import React, { useState } from "react";
import "./Home.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import ResumeCV from "./ResumeCV";
import Skills from "./Skills";
import Blogs from "./Blogs";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa"; // Import icons from FontAwesome library
// Import other section components here

const Home = () => {
  const sections = [
    { id: "about", name: "About Me", component: AboutMe },
    { id: "skills", name: "Skills", component: Skills },
    { id: "projects", name: "Projects", component: Projects },
    { id: "experience", name: "Experience", component: Experience },
    { id: "blogs", name: "Blogs", component: Blogs },
    { id: "contact", name: "Contact Me", component: Contact },
    { id: "resume", name: "Resume/CV", component: ResumeCV },
    // Add other sections here
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionClick = (id) => {
    setActiveSection(id);
    document.getElementById("content_uid").scroll(0, 0);
    if (window.innerWidth <= 576) {
      setSidebarOpen(false);
    }
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/vanshpratapsingh/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/llxSKyWALKeRxll", "_blank");
  };

  const handleMenuButtonClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseButtonClick = () => {
    setSidebarOpen(false);
  };

  const renderSectionContent = () => {
    const activeComponent = sections.find(
      (section) => section.id === activeSection
    );
    return activeComponent ? <activeComponent.component /> : null;
  };

  return (
    <div className="home">
      <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar">
          <div className="profile-wrapper">
            <div className="profile-image"></div>
          </div>
          <ul>
            {sections.map((section) => (
              <li
                key={section.id}
                className={activeSection === section.id ? "active" : ""}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.name}
              </li>
            ))}
          </ul>
          <div className="social-icons">
            <FaLinkedin className="icon" onClick={handleLinkedInClick} />
            <FaGithub className="icon" onClick={handleGitHubClick} />
          </div>
        </div>
        {sidebarOpen && (
          <div className="close-button" onClick={handleCloseButtonClick}>
            <FaTimes />
          </div>
        )}
      </div>
      <div
        className={`content ${sidebarOpen ? "sidebar-open" : ""}`}
        id="content_uid"
      >
        <div className="menu-button" onClick={handleMenuButtonClick}>
          <FaBars />
        </div>
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default Home;
