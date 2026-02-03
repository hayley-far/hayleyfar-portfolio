import React, { useState, useEffect, useRef } from 'react';
import AboutMe from './AboutMe.jsx';
import styles from './ScrollReveal.module.css';

function ScrollReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / (rect.height - windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Spacer */}
      <div className={styles.spacer}></div>

      {/* Sticky Section */}
      <div ref={containerRef} className={styles.stickyContainer}>
        <div className={styles.stickySection}>

          {/* Title Section */}
          <div
            className={styles.titleSection}
            style={{ transform: `translateX(${-scrollProgress * 100}%)` }}
          >
            <div className={styles.titleContent}>
              <h1>HAYLEY FAR</h1>
              <p>Bachelor of Engineering (Honours) in Software</p>
              <p>Victoria University of Wellington</p>
            </div>
          </div>
          {/* Information Section */}
          <div className={styles.aboutMeSection}>
            <AboutMe />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ScrollReveal;
