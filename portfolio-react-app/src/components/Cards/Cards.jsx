import React from 'react';
// Import the logo image
// Webpack/Vite will handle bundling this image
import logo from '../../assets/logo.jpeg';
// Import CSS Module styles
// CSS Modules keep styles scoped to this component only
import './Cards.module.css';
import styles from './Cards.module.css';

function Card({ title, description, variant, onClick }) {
  return (
    <div
      className={`${styles.card} ${styles[variant]}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <h3>{title}</h3>
      {description}
    </div>
  );
}


export default Card