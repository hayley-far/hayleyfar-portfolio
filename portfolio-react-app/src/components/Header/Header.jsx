import React from 'react';
// Import the logo image
// Webpack/Vite will handle bundling this image
import logo from '../../assets/logo.jpeg';
// Import CSS Module styles
// CSS Modules keep styles scoped to this component only
import styles from './Header.module.css';

function Header() {
  return (
      // Semantic HTML element for page header
    <header>
        {/* Navigation bar */}
        <nav>
            {/* Anchor links for page sections */}
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
        </nav>
        {/* Logo image */}
        <img src={logo} alt="Logo" className={styles.logo}/>
        {/* Site title */}
        <h3 className={styles.navText}>hayley's portfolio</h3>
    </header>
  );
}
export default Header