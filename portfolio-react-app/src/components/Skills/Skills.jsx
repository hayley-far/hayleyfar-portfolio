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
            title="Skill 1"
            description="Experienced in building semantic and accessible web pages using HTML5."
            variant="skillsCard"
          />
          <Card
            title="Skill 2"
            description="Skilled in styling web pages with CSS3, including Flexbox and Grid layouts."
            variant="skillsCard"
          />
          <Card
            title="Skill 3"
            description="Proficient in JavaScript ES6+, including DOM manipulation and event handling."
            variant="skillsCard"
          />
          <Card
            title="Skill 4"
            description="Experienced in building dynamic user interfaces using React.js and component-based architecture."
            variant="skillsCard"
          />
      </div>
  );
}
export default Skills