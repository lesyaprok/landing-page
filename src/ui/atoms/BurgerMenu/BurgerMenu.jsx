import React from 'react';
import styles from './Burger.module.css';

const BurgerMenu = ({onClick}) => {
  return <button className={`${styles.burger} sm:hidden`} type="button" onClick={onClick} />;
};

export default BurgerMenu;
