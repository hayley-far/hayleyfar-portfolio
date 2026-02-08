import React from 'react';
// Import the logo image
// Webpack/Vite will handle bundling this image
import logo from '../../assets/logo.PNG';
// Import CSS Module styles
// CSS Modules keep styles scoped to this component only
import styles from './Header.module.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
      // Semantic HTML element for page header
    <header>
        {/* Navigation bar */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        {/* Logo image */}
        <img src={logo} alt="Logo" className={styles.logo}/>
        {/* Site title */}
        {/*<h3 className={styles.navText}>hayley's portfolio</h3> */}
    </header>
  );
}
export default Header