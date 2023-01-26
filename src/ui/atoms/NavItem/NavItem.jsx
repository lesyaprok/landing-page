import React from 'react';
import styles from './NavItem.module.css';

const NavItem = ({ path, name, className, onClick }) => {
  return (
    <a className={`${styles.item} ${className}`} href={path} onClick={onClick}>
      {name}
    </a>
  );
};

export default NavItem;
