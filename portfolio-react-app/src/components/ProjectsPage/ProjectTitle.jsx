import React from 'react';
import styles from './ProjectTitle.module.css';

// Holds the key code of the types of projects (university and personal) with their respective colors
function ProjectTitle() {
  return (
    <div className={styles.projectTitle}>
        <div className={styles.keyCode}>
          <div className={styles.codeItem}>
            <div className={styles.codeSymbol} style={{ backgroundColor: "#63ad7d" }} />
            <span>University</span>
          </div>
          <div className={styles.codeItem}>
            <div className={styles.codeSymbol} style={{ backgroundColor: "#a882bf" }} />
            <span>Personal</span>
          </div>
        </div>
    </div>
  );
}
export default ProjectTitle