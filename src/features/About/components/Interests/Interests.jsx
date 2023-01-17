import React from 'react';
import styles from './Interests.module.css';

const Interests = () => {
  const interests = [
    { id: 1, title: 'Music', subtitle: 'Indie rock | Reggae', icon: 'music' },
    {
      id: 2,
      title: 'Art',
      subtitle: 'Edvard Munch | Frida Kahlo',
      icon: 'drawing',
    },
    {
      id: 3,
      title: 'Photography',
      subtitle: 'Portraits',
      icon: 'photo',
    },
  ];

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
