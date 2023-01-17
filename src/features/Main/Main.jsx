import React from 'react';
import ButtonWithIcon from '../../ui/molecules/ButtonWithIcon/ButtonWithIcon';
import styles from './Main.module.css';

const Main = () => {
  return (
    <section className={styles.main}>
      <div className="container mx-auto pt-7 pb-[225px] md:pt-[92px] md:pb-[51px] lg:pt-[162px] lg:pb-[166px]">
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
          <ButtonWithIcon />
        </a>
      </div>
    </section>
  );
};

export default Main;
