import React from 'react';
import './Header.module.css';
import logo from '../../assets/logo.jpeg';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
        <nav>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
        </nav>
        <img src={logo} alt="Logo" className={styles.logo}/>
        <h3>hayley's portfolio</h3>
    </header>
  );
}
export default Header