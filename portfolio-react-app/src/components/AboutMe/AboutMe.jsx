import React from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './AboutMe.module.css';

// This is a React functional component
// Components are reusable pieces of UI
function AboutMe() {
  return (
    // Outer container div
    // className is used instead of 'class' in JSX
    // styles.aboutMe comes from AboutMe.module.css
    <div className={styles.aboutMe}>
        {/* Inner div for text content */}
        <div className={styles.aboutMeText}>
            <h1> Welcome to my portfolio! </h1>
            <p> My About Me Section :D </p>
        </div>
    </div>
  );
}
// Export the component so it can be used in other files (like App.jsx)
export default AboutMe