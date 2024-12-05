import React, { useState } from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const projects = {
  section1: {
    title: "Code Canvas...",
    items: [
      {
        title: "Tourism Website",
        subtitle: "Personal Portfolio",
        applications: "HTML, CSS, JAVASCRIPT, BOOTSTRAP",
        period: "Oct 2024 - Nov 2024",
        abstract: "A Tourism Website showcasing my skills, projects, and experience using front-end.",
        description: 'lorem ipsum',
        link: "https://github.com/yourportfolio",
      },
      {
        title: "Portfolio",
        subtitle: "Personal Portfolio",
        applications: "HTML, CSS, BOOTSTRAP, REACT",
        period: "Nov 2024",
        abstract: "A web app that provides real-time weather updates using OpenWeather API.",
        description: 'lorem ipsum',
        link: "https://github.com/yourweatherapp",
      },
    ],
  },
  section2: {
    title: "Where Physics Meets...",
    items: [
      {
        title: "Band Gap and Conductivity Variations of ZnO Thin Films by Doping with Sr",
        subtitle: "M Sc Project",
        applications: "SILAR, XRD, UV Spectrum",
        period: "Apr 2024 - Aug 2024",
        abstract: "An e-commerce platform featuring a shopping cart, payment gateway, and order tracking.",
        description: '',
        link: "https://github.com/yourecommerce",
      },
      {
        title: "Contrasting Seasonal Characteristics of Tropical Cirrus Clouds",
        subtitle: "B Sc Project",
        applications: "CALIOP, CALIPSO, MODIS",
        period: "Jan 2022 - May 2022",
        abstract: "A platform for creating, editing, and sharing blog posts with an interactive UI.",
        description: 'lorem ipsum',
        link: "https://github.com/yourblog",
      },
    ],
  },
};

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="complete">
      <h1 className="project-head">PROJECT PALETTES</h1>

    <div className="project-container">
      {/* Section 1: Frontend Projects */}
      <h2 className="section-title">{projects.section1.title}</h2>
      <div className="project-section row"> 
        {projects.section1.items.map((project, index) => (
          <div key={index} className="project-card col">
            <h2>{project.title}</h2>
            <h4>{project.subtitle}</h4>
            <p>
               {project.applications}
            </p>
            <p>
              <strong>Period:</strong> {project.period}
            </p>
            <p>
              <strong>Abstract:</strong> {project.abstract}
            </p>
            <button onClick={() => openModal(project)}>Learn More</button>
          </div>
        ))}
      </div>

      {/* Section 2: Full-Stack Projects */}
      <h2 className="section-title">{projects.section2.title}</h2>
      <div className="project-section row">
        {projects.section2.items.map((project, index) => (
          <div key={index} className="project-card col">
            <h2>{project.title}</h2>
            <h4>{project.subtitle}</h4>
            <p>
              <strong>Applications Used:</strong> {project.applications}
            </p>
            <p>
              <strong>Period:</strong> {project.period}
            </p>
            <p>
              <strong>Abstract:</strong> {project.abstract}
            </p>
            <button onClick={() => openModal(project)}>Learn More</button>
          </div>
        ))}
      </div>

      {/* Modal for Selected Project */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <h3>{selectedProject.subtitle}</h3>
            <p>
              <strong>Applications Used:</strong> {selectedProject.applications}
            </p>
            <p>
              <strong>Period:</strong> {selectedProject.period}
            </p>
            <p>
              <strong>Description:</strong> {selectedProject.description}
            </p>
            <button onClick={() => window.open(selectedProject.link, "_blank")}>
              View Project
            </button>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>  
  );
};

export default Project;







  