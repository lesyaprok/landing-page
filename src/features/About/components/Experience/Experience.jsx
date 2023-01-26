import React from 'react';
import experience from './constants';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <div className="experience">
      <h3 className={styles.title}>Education & Experience</h3>
      <div className={styles.wrapper}>
        {experience.map((item) => {
          return (
            <div className={styles.itemContainer} key={item.id}>
              <p className={styles.itemLeft}>{item.years}</p>
              <div className={styles.itemRight}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemSubtitle}>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
