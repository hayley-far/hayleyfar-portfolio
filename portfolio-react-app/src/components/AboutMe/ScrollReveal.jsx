// portfolio-react-app/src/components/AboutMe/ScrollReveal.jsx
import React, { useState, useEffect, useRef } from 'react';
import AboutMe from './AboutMe.jsx';
import styles from './ScrollReveal.module.css';
import pixel from '../../assets/fonts/Mister Pixel Regular.otf';

function ScrollReveal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const denom = Math.max(rect.height - windowHeight, 1);
      const progress = Math.min(Math.max(-rect.top / denom, 0), 1);
      setScrollProgress(progress);
    };
    handleScroll(); // set initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <style>{`
        @font-face {
          font-family: 'Mister Pixel';
          src: url(${pixel}) format('opentype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className={styles.spacer} />

      <div ref={containerRef} className={styles.stickyContainer}>
        <div className={styles.stickySection}>
          <div
            className={styles.titleSection}
            style={{ transform: `translateX(${-scrollProgress * 100}%)` }}
          >
            <div className={styles.titleContent}>
              <p> Hi, my name is </p>
              <h1 style={{ fontFamily: "Mister Pixel"}}>Hayley Far</h1>
            </div>
          </div>

          <div className={styles.aboutMeSection}>
            <AboutMe />
          </div>

        </div>
      </div>
    </div>
  );
}

export default ScrollReveal;
