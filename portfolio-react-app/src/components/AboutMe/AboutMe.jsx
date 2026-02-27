import React from 'react';
import arrow from '../../assets/downArrow.jpeg';
import styles from './AboutMe.module.css';
import profile from '../../assets/profile.jpeg';

function AboutMe() {
  const handleScrollToSkills = (e) => {
    e.preventDefault();
    const skillsSection = document.getElementById('skills');
    const navbarHeight = 90;
    const offsetPosition = skillsSection.offsetTop - navbarHeight - 100;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={profile} alt="profile" className={styles.img} />
        </div>
        <div className={styles.aboutMe}>
          <h1>// about me</h1>
          <p>
            I’m currently in my penultimate year studying Software Engineering at Victoria University of Wellington.
            I enjoy building interactive, user-focused projects and experimenting with new technologies.
            I’m always looking for opportunities to challenge myself and grow as a developer.
          </p>
        </div>
      </div>

      <a href="#skills" onClick={handleScrollToSkills} className={styles.arrowLink}>
        <img src={arrow} alt="Down arrow" className={styles.arrow} />
      </a>
    </div>
  );
}

export default AboutMe;
