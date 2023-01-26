import React from 'react';
import ButtonWithIcon from '../../ui/molecules/ButtonWithIcon/ButtonWithIcon';
import styles from './Main.module.css';

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <div className="mb-9 lg:mb-[92px]">
          <h1 className={styles.title}>Hey, I’m Nick</h1>
          <h2 className={styles.subtitle}>Frontend developer</h2>
        </div>
        <div className={styles.description}>
          <p>
            Help you to create high-quality digital products that your clients
            will love and let your business thrive
          </p>
        </div>
        <a href="#get_in_touch">
          <ButtonWithIcon text="Get in touch"/>
        </a>
      </div>
    </section>
  );
};

export default Main;
