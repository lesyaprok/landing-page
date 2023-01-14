import React from 'react';
import ButtonWithIcon from '../../ui/molecules/ButtonWithIcon/ButtonWithIcon';
import aboutImage from './images/about.png';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import styles from './About.module.css';

const About = () => {
  return (
    <section className="about">
      <div className={styles.aboutContainer}>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.topWrapper}>
          <img src={aboutImage} alt="" className={styles.aboutImage} />
          <div className={styles.description}>
            <p className={styles.descriptionText}>
              <span className="font-semibold text-black">Nick Richardson</span>
              - specialist in Frontend development. Clear code is my passion.
              Solving issues through negotiations
            </p>
            <div className="hidden md:block">
              <ButtonWithIcon />
            </div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <Interests />
          <Experience />
        </div>
        <div className="mt-[57px] md:hidden">
          <ButtonWithIcon />
        </div>
      </div>
    </section>
  );
};

export default About;
