import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import BurgerMenu from '../../atoms/BurgerMenu/BurgerMenu';
import NavBar from '../../molecules/NavBar/NavBar';
import listItems from './listItems';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <nav className="h-8 sm:h-fit">
          <NavBar navItems={listItems} />
          <BurgerMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
