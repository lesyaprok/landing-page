import React from 'react';
import styles from './NavItem.module.css';

const NavItem = ({ path, name }) => {
  return (
    <a className={styles.item} href={path}>
      {name}
    </a>
  );
};

export default NavItem;
