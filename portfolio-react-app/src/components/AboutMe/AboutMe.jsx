import React from 'react';
import arrow from '../../assets/downArrow.jpeg';
import styles from './AboutMe.module.css';

function AboutMe() {
  const handleScrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.getElementById('skills');
    const navbarHeight = 80; // Adjust to match your navbar height
    const offsetPosition = skillsSection.offsetTop - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <h1 style={{fontSize: 60 }}>Welcome to my portfolio!</h1>
        <p>I am currently in my penultimate-year studying Software Engineering at Victoria University of Wellington, with a
            passion for building interactive projects. I enjoy experimenting with new technologies and approaches, and I’m
            always keen to take on challenges that help me grow my skills.</p>
      </div>
      <a href="#skills" onClick={handleScrollToSkills}>
        <img src={arrow} alt="Down arrow" className={styles.arrow}/>
      </a>
    </div>
  );
}

export default AboutMe;
