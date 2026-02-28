import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import Card from '../Cards/Cards.jsx';

/* When the user scrolls to the projects section, the carousel will scroll horizontally to reveal more projects.
The user will continue to scroll while the page scrolls horizontally rather than vertically.
Once the user has scrolled through all the projects, the page will scroll vertically again.
 */
function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  // to track the VERTICAL scroll, inside the sticky container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(-rect.top / (rect.height - windowHeight), 0),
        1
      );
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply HORIZONTAL scroll based on progress
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft =
      carousel.scrollWidth - carousel.clientWidth;

    carousel.scrollLeft = scrollProgress * maxScrollLeft;
  }, [scrollProgress]);

  return (
    <>
      {/* Spacer before projects */}
      <div className={styles.spacer}></div>

      {/* Sticky scroll container */}
      <div ref={containerRef} className={styles.stickyContainer}>
        <section className={styles.stickySection}>
          <h2>// projects</h2>
          <p className={styles.subTitle}> {'>'} Click on a project to learn more about it!</p>

          {/* Carousel of project cards */}
          <div ref={carouselRef} className={styles.carouselContainer}>
            <Link to="/projects#portfolio">
              <Card title="Portfolio Website" description={<p>Interactive Web Portfolio</p>} variant="projectCard" />
            </Link>
            <Link to="/projects#bomberman">
              <Card title="Acorn Bomber" description={<p>2D Bomberman-style game</p>} variant="projectCard" />
            </Link>
            <Link to="/projects#chips">
              <Card title="Fash and Chaps" description={<p>SWEN225 Chips Challenge Game</p>} variant="projectCard" />
            </Link>
            <Link to="/projects#recapp">
              <Card title="Recapp" description={<p>VUW Hackathon 2025</p>} variant="projectCard" />
            </Link>
            <Link to="/projects#galaga">
              <Card title="Star Swarm" description={<p>CGRA151 Galaga-style game</p>} variant="projectCard" />
            </Link>
            <Link to="/projects#avc">
              <Card title="Autonomous Vehicle Challenge" description={<p>ENGR101 Robot Project</p>} variant="projectCard" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
