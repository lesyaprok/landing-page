import React from 'react';
import styles from './Interests.module.css';
import interests from './constants';

const Interests = () => {
  return (
    <div>
      <h3 className={styles.title}>Interests</h3>
      <div className={styles.wrapper}>
        {interests.map((item) => {
          const icon = require(`../../images/icons/${item.icon}.png`);
          return (
            <div className={styles.item} key={item.id}>
              <img src={icon} alt={item.icon} className={styles.icon} />
              <div className={styles.info}>
                <h4 className={styles.infoTitle}>{item.title}</h4>
                <p className={styles.infoSubtitle}>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interests;
