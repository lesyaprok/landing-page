import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experience = [
    {
      id: 1,
      years: '2008 - Present',
      title: 'Middle Frontend developer',
      subtitle: 'Ozon',
    },
    {
      id: 2,
      years: '2006 - 2007',
      title: 'Frontend development courses',
      subtitle: 'Stepik',
    },
    {
      id: 3,
      years: '2000 - 2005',
      title: 'Frontend developer',
      subtitle: 'Saint Petersburg State University',
    },
  ];

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
