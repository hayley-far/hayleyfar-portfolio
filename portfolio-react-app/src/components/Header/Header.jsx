import React from 'react';
import logo from '../../assets/logo.PNG';
import styles from './Header.module.css';

// Import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

//Navigation Bar
function Header() {
  return (
    <header>
        {/* Navigation bar */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </nav>
        {/* Logo image */}
        <img src={logo} alt="Logo" className={styles.logo}/>
    </header>
  );
}
export default Header