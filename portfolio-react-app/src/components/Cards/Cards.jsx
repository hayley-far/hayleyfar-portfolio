import React from 'react';
// Import the logo image
// Webpack/Vite will handle bundling this image
import logo from '../../assets/logo.jpeg';
// Import CSS Module styles
// CSS Modules keep styles scoped to this component only
import './Cards.module.css';
import styles from './Cards.module.css';

function Card({ title, description, variant = 'default' }) {
  return (
    <div className={`${styles.card} ${styles[variant]}`}> {/* base class styles and dynamic */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card