import React from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './Projects.module.css';
import Card from '../Cards/Cards.jsx';

// This is a React functional component
// Components are reusable pieces of UI
function Projects() {
  return (
    <div className={styles.projectsSection}>
      {/* Title above carousel */}
      <h2>Projects</h2>

      {/* Carousel container */}
      <div className={styles.carouselContainer}>
        <Card title="Portfolio Website" description={<p>This website :)</p>} variant="projectCard" />
        <Card title="Bomberman Game" description={<p>Personal Game Project</p>} variant="projectCard" />
        <Card title="Fash and Chaps" description={<p>SWEN225 Chips Challenge Game</p>} variant="projectCard" />
        <Card title="Recapp" description={<p>VUW Hackathon 2025</p>} variant="projectCard" />
        <Card title="Galaga Game" description={<p>CGRA151 Project</p>} variant="projectCard" />
        <Card title="Autonomous Vehicle Challenge" description={<p>ENGR101 Robot Project</p>} variant="projectCard" />
      </div>
    </div>
  );
}

// Export the component so it can be used in other files (like App.jsx)
export default Projects