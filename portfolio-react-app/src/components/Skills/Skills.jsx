import React from 'react';
import './Skills.module.css';
import styles from './Skills.module.css';
import Card from '../Cards/Cards.jsx';

// Scrolls to the top of this section when the arrow button in the header is clicked
function Skills() {
  return (
      <>
      <section id="skills" className={styles.header}>
          <h2>// skills</h2>
      </section>
      <p className={styles.subTitle}> {'>'} Technical skills in programming and software development gained through university and personal projects. </p>
      <section className={styles.gridContainer}>
          <Card
            title="Languages"
            description={<p>Java   |   C/C++   |   JavaScript   |   HTML/CSS   |   Python</p>}
            variant="skillsCard"
          />
          <Card
            title="Frameworks & Libraries"
            description={<p>Java Swing   |   JUnit   |   React</p>}
            variant="skillsCard"
          />
          <Card
            title="Developer Tools & Software"
            description={<p>Git (GitHub/GitLab)   |   IntelliJ   |   Eclipse</p>}
            variant="skillsCard"
          />
          <Card
            title="Other Skills"
            description={<p>AWS   |   Docker   |   Bash/Linux Command-Line</p>}
            variant="skillsCard"
          />
      </section>
      </>
  );
}
export default Skills