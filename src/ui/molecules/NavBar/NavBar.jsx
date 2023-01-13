import React from 'react';
import NavItem from '../../atoms/NavItem/NavItem';
import styles from './NavBar.module.css';

const NavBar = ({ navItems }) => {
  return (
    <ul className={styles.navbar}>
      {navItems.map((item) => (
        <NavItem key={item.id} path={item.path} name={item.name} />
      ))}
    </ul>
  );
};

export default NavBar;
