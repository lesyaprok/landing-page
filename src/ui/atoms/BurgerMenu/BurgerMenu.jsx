import React from 'react';
import styles from './Burger.module.css';

const BurgerMenu = () => {
  return <button className={`${styles.burger} sm:hidden`} type="button" />;
};

export default BurgerMenu;
