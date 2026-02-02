import React from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './ProjectsSection.module.css';
import Card from '../Cards/Cards.jsx';


// This is a React functional component
// Components are reusable pieces of UI
function ProjectSection() {
  return (
      <div className={styles.projectsSection}>
        {/* Title above carousel */}
        <div className={styles.carouselContainer}>
          {/* Project cards would go here */}
          <Card title="Portfolio Website" variant="projectPageCard" />
          <Card title="Bomberman Game" variant="projectPageCard" />
          <Card title="Fash and Chaps" variant="projectPageCard" />
          <Card title="Recapp" variant="projectPageCard" />
          <Card title="Galaga Game" variant="projectPageCard" />
          <Card title="Autonomous Vehicle Challenge" variant="projectPageCard" />
        </div>
        <div className={styles.mainContent}>
          {/* Right column content would go here */}
            <p> Right column content will be displayed here. </p>
        </div>
      </div>
    );
}

// Export the component so it can be used in other files (like App.jsx)
export default ProjectSection