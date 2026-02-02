import React, { useState } from 'react';

// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './ProjectsSection.module.css';
import Card from '../Cards/Cards.jsx';


// This is a React functional component
// Components are reusable pieces of UI
function ProjectSection() {
    const projects = [
            {title: "Portfolio Website", description: <p>My personal portfolio built with React.</p>,},
            {title: "Bomberman Game", description: <p>A classic Bomberman clone.</p>,},
            {title: "Fash and Chaps", description: <p>Chips Challenge.</p>,},
            {title: "Recapp", description: <p>Hackathon App.</p>,},
            {title: "Galaga Game", description: <p>Retro arcade shooter.</p>,},
            {title: "Autonomous Vehicle Challenge", description: <p>Self-driving competition project.</p>,},
          ];
    const [activeProject, setActiveProject] = useState(projects[0]);

  return (
      <section className={styles.projectsSection}>
            {/* Left column */}
            <div className={styles.carouselContainer}>
              {projects.map((project) => (
                <Card
                  key={project.title}
                  title={project.title}
                  variant="projectPageCard"
                  onClick={() => setActiveProject(project)}
                />
              ))}
            </div>

            {/* Right column */}
            <div className={styles.mainContent}>
              <Card
                title={activeProject.title}
                description={activeProject.description}
                variant="mainContentCard"
              />
            </div>
          </section>
    );
}

// Export the component so it can be used in other files (like App.jsx)
export default ProjectSection