import React from 'react';
import { Link } from "react-router-dom";
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
        <Link to="/projects#portfolio">
            <Card title="Portfolio Website" description={<p>This website :)</p>} variant="projectCard" />
        </Link>
        <Link to="/projects#bomberman">
            <Card title="Bomberman Game" description={<p>Personal Game Project</p>} variant="projectCard" />
        </Link>
        <Link to="/projects#chips">
            <Card title="Fash and Chaps" description={<p>SWEN225 Chips Challenge Game</p>} variant="projectCard" />
        </Link>
        <Link to="/projects#recapp">
            <Card title="Recapp" description={<p>VUW Hackathon 2025</p>} variant="projectCard" />
        </Link>
        <Link to="/projects#galaga">
            <Card title="Galaga Game" description={<p>CGRA151 Project</p>} variant="projectCard" />
        </Link>
        <Link to="/projects#avc">
            <Card title="Autonomous Vehicle Challenge" description={<p>ENGR101 Robot Project</p>} variant="projectCard" />
        </Link>
      </div>
    </div>
  );
}

// Export the component so it can be used in other files (like App.jsx)
export default Projects