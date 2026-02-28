{/* Reusable class for all different types of card objects
    not all the props are required, but they can be used to customize the card as needed
    eg. images on project cards, but not skills etc
    made reusable using the variant prop, which applies different styles based on the type of card (eg. project, skill, experience etc)
*/}
import React from 'react';
import './Cards.module.css';
import styles from './Cards.module.css';

function Card({ title, description, date, variant, color, isActive, onClick, image }) {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${color ? styles[color] : ""} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <h3>{title}</h3>
      {date && <p className={styles.date}>{date}</p>}
      <div className={styles.content}>
        {image && <img src={image} alt={`${title} image`} className={styles.image} />}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}

export default Card