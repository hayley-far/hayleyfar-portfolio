import React from 'react';
import './AboutMe.module.css';
import styles from './AboutMe.module.css';

function AboutMe() {
  return (

    <div className={styles.aboutMe}>
        <div className={styles.aboutMeText}>
            <h1> Welcome to my portfolio! </h1>
            <p> My About Me Section :D </p>
        </div>
    </div>
  );
}
export default AboutMe