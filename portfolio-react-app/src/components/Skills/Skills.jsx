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
      <div className={styles.gridContainer}>
          <Card
            title="Languages"
            description={<p>Java <br /> C/C++ <br /> JavaScript <br /> HTML/CSS <br /> Python</p>}
            variant="skillsCard"
          />
          <Card
            title="Frameworks"
            description={<p>React <br /> JUnit</p>}
            variant="skillsCard"
          />
          <Card
            title="Developer Tools"
            description={<p>GitHub <br /> GitLab <br /> IntelliJ <br /> Visual Studio Code <br /> Vite</p>}
            variant="skillsCard"
          />
          <Card
            title="Softwares"
            description={<p>Figma <br /></p>}
            variant="skillsCard"
          />
      </div>
  );
}
export default Skills