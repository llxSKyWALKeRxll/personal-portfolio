import React, { useState } from "react";
import "./Projects.css";
import ProjectBackdrop from "./ProjectBackdrop";
import PaidContentSearch from "./ProjectDetails/PaidContentSearch";
import BackendSuggestion from "./ProjectDetails/BackendSuggestion";
import ExpenseTracker from "./ProjectDetails/ExpenseTracker";
import RestaurantMonitoring from "./ProjectDetails/RestaurantMonitoring";
import SelfHavocII from "./ProjectDetails/SelfHavocII";
import SelfHavocI from "./ProjectDetails/SelfHavocI";
import VideoManipulation from "./ProjectDetails/VideoManipulation";
import ImageManipulation from "./ProjectDetails/ImageManipulation";
import WebHavoc from "./ProjectDetails/WebHavoc";
import FoodPrep from "./ProjectDetails/FoodPrep";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      image: "https://static.thenounproject.com/png/1847007-200.png",
      title: "Paid Content Search",
      short_description:
        "Developed APIs for Adda247's paid content platform, enabling fast and accurate search, displaying popular courses, and providing filters for refined results. Improved user experience and potentially impacted company revenue.",
      long_description: <PaidContentSearch />,
      link: "https://www.adda247.com/",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/2118/2118247.png",
      title: "Backend for Suggestion/Course Display",
      short_description:
        "Developed and implemented a suggestion API at Adda247, enabling users to easily find and filter category-specific content, resulting in improved revenue and user retention",
      long_description: <BackendSuggestion />,
      link: "https://www.adda247.com/",
    },
    {
      id: 3,
      image:
        "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/8a/25/44/8a2544c1-f93d-1b95-0f81-b8ee4d23ba2f/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
      title: "Expense Tracker",
      short_description:
        "Developed an Expense Tracker website with user-friendly features for adding, categorizing, and tracking expenses. Implemented robust filtering options and an intuitive user interface for efficient expense management.",
      long_description: <ExpenseTracker />,
      link: "https://github.com/llxSKyWALKeRxll/React_Expenses_Project",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-vector/restaurant-building-city-background-street_165488-4443.jpg",
      title: "Restaurant Monitoring System",
      short_description:
        "Developed backend functionality to monitor the online status of restaurants during business hours, generated reports on uptime and downtime, and implemented efficient data processing and interpolation techniques.",
      long_description: <RestaurantMonitoring />,
      link: "https://github.com/llxSKyWALKeRxll/Python_Report_Generation_Application",
    },
    {
      id: 5999,
      image:
        "https://llxskywalkerxll.github.io/webhavoc.github.io/images/Self%20Havoc%201/o3.PNG",
      title: "Web Havoc",
      short_description:
        "Developed a responsive website, Web Havoc, using HTML, CSS, and JavaScript to showcase the games Self Havoc-I and Self Havoc-II. Designed with user-friendly interface, engaging features, and responsive layout for optimal viewing experience.",
      long_description: <WebHavoc />,
      link: "https://github.com/llxSKyWALKeRxll/webhavoc.github.io",
    },
    {
      id: 5,
      image:
        "https://user-images.githubusercontent.com/79057173/142783945-2438a7fe-e3ea-453b-b6cc-2af26bb79687.png",
      title: "Self Havoc-II",
      short_description:
        "Developed Self Havoc-II, a 3D-based third person game using Java and OpenGL, with realistic features such as fog, height-map terrain, and object-collision detection. Implemented shaders, phong lighting, and optimized texture rendering using multi-texturing and mip-mapping.",
      long_description: <SelfHavocII />,
      link: "https://github.com/llxSKyWALKeRxll/Self-Havoc-II",
    },
    {
      id: 6,
      image:
        "https://user-images.githubusercontent.com/79057173/119277194-d35b4b00-bc3b-11eb-8cc5-f7f9dad55399.PNG",
      title: "Self Havoc-I",
      short_description:
        "Developed Self Havoc-I, a 3D first-person game using Python and PyGame, implementing Ray Tracing technique and Bresenham's Line Algorithm. Leveraged recognized Computer Graphics algorithms to overcome PyGame's 3D limitations and utilized sprites, textures, and sound effects for an immersive gameplay experience.",
      long_description: <SelfHavocI />,
      link: "https://github.com/llxSKyWALKeRxll/Self_Havoc",
    },
    {
      id: 6766,
      image:
        "https://user-images.githubusercontent.com/79057173/134763332-46a1a1c2-ff45-46c1-9e03-c88ae5443ffe.jpg",
      title: "FoodPrep",
      short_description:
        "Developed a dynamic Android application, FoodPrep, using Kotlin, Java, and XML, offering features such as user authentication, restaurant search, menu selection, cart management, and order history tracking. Integrated JSON parsing, APIs, local databases, and local libraries for seamless functionality.",
      long_description: <FoodPrep />,
      link: "https://github.com/llxSKyWALKeRxll/FoodPrep",
    },
    {
      id: 7,
      image:
        "https://user-images.githubusercontent.com/79057173/119739151-66e08600-be9f-11eb-9775-3515bd8271ec.PNG",
      title: "Video Manipulation",
      short_description:
        "Developed a video manipulation application in Python using Pygame, Numpy, and OpenCV. Implemented techniques like custom symbol conversion, colored symbols, and custom-sized pixels. Integrated screenshot capture functionality with the ability to save images at a specified location.",
      long_description: <VideoManipulation />,
      link: "https://github.com/llxSKyWALKeRxll/Video_Manipulation",
    },
    {
      id: 8,
      image:
        "https://user-images.githubusercontent.com/79057173/119736743-d5bbe000-be9b-11eb-9d0b-78d19ae10e9f.PNG",
      title: "Image Manipulation",
      short_description:
        "Developed an image manipulation application in Python using Pygame and Numpy. Allows users to manipulate images using Latin Extended-B symbols with customizable symbol size and colors. Provides the ability to save the manipulated image to a specified directory by holding the 'SPACE' button.",
      long_description: <ImageManipulation />,
      link: "https://github.com/llxSKyWALKeRxll/Image_Manipulation",
    },
    // Add more projects here
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackdropClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div
            className="project"
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.short_description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectBackdrop
          onClose={handleBackdropClose}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default Projects;
