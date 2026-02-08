import React from 'react';
// Import the logo image
// Webpack/Vite will handle bundling this image
import logo from '../../assets/logo.jpeg';
// Import CSS Module styles
// CSS Modules keep styles scoped to this component only
import './Skills.module.css';
import styles from './Skills.module.css';

import Card from '../Cards/Cards.jsx';

function Skills() {
  return (
      <section id="skills" className={styles.gridContainer}>
          <Card
            title="Languages"
            description={<p>Java <br /> C/C++ <br /> JavaScript <br /> HTML/CSS <br /> Python</p>}
            variant="skillsCard"
          />
          <Card
            title="Frameworks"
            description={<p>Java Swing <br />React <br /> JUnit</p>}
            variant="skillsCard"
          />
          <Card
            title="Developer Tools & Software"
            description={<p>GitHub/GitLab <br /> IntelliJ <br /> Eclipse</p>}
            variant="skillsCard"
          />
          <Card
            title="Other Skills"
            description={<p>AWS <br /> Docker & VMs</p>}
            variant="skillsCard"
          />
      </section>
  );
}
export default Skills