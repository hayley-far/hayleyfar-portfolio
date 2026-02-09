import React from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './ProjectTitle.module.css';


// This is a React functional component
// Components are reusable pieces of UI
function ProjectTitle() {
  return (
        <div className={styles.projectTitle}>
                <div className={styles.keyCode}>
                  <div className={styles.codeItem}>
                    <div className={styles.codeSymbol} style={{ backgroundColor: "#C3E4EB" }} />
                    <span>University</span>
                  </div>
                  <div className={styles.codeItem}>
                    <div className={styles.codeSymbol} style={{ backgroundColor: "#EBC3E4" }} />
                    <span>Personal</span>
                  </div>
                </div>
        </div>
    );
}

// Export the component so it can be used in other files (like App.jsx)
export default ProjectTitle