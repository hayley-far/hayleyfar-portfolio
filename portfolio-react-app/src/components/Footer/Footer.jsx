import React from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './Footer.module.css';


// This is a React functional component
// Components are reusable pieces of UI
function Footer() {
  return (
      <div className={styles.footer}>
            <p className={styles.context}>© 2026 Hayley Far. All rights reserved. Designed and built by Hayley Far.</p>
      </div>
    );
}

// Export the component so it can be used in other files (like App.jsx)
export default Footer