import React from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import arrow from '../../assets/downArrow.jpeg';
import styles from './AboutMe.module.css';

// This is a React functional component
// Components are reusable pieces of UI
function AboutMe() {
  return (

    <div className={styles.container}>
    <div className={styles.aboutMe}>
      <h1>Welcome to my portfolio!</h1>

      <p>My About Me Section</p>

    </div>
    <img src={arrow} alt="Down arrow" className={styles.arrow}/>
    </div>
  );
}

// Export the component so it can be used in other files (like App.jsx)
export default AboutMe