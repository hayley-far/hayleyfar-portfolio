import React from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './Contact.module.css';
import profile from '../../assets/logo.PNG';

// Icons
import email from '../../assets/emailIcon.jpeg';
import github from '../../assets/githubIcon.jpeg';
import linkedin from '../../assets/linkedinIcon.jpeg';

// This is a React functional component
// Components are reusable pieces of UI
function Contact() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.left}>
        <h2 style={{fontSize: 50 }}>// contact me</h2>
        <div className={styles.contactInfo}>
          <a href="https://www.linkedin.com/in/hayley-far-33a366355/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn Icon" className={styles.icon} />
          </a>
          <a href="https://github.com/hayley-far" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub Icon" className={styles.icon} />
          </a>
          <a href="mailto:hayleyfar5@gmail.com">
            <img src={email} alt="Email Icon" className={styles.icon} />
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <img src={profile} alt="Profile Img" className={styles.img} />
    </div>
  );
}



// Export the component so it can be used in other files (like App.jsx)
export default Contact