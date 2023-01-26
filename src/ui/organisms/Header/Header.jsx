import React, { useState } from 'react';
import Logo from '../../atoms/Logo/Logo';
import BurgerMenu from '../../atoms/BurgerMenu/BurgerMenu';
import NavBar from '../../molecules/NavBar/NavBar';
import listItems from './constants';
import styles from './Header.module.css';
import Sidebar from '../../molecules/Sidebar/Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <nav className="h-8 sm:h-fit">
          <NavBar navItems={listItems} />
          <BurgerMenu
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
          />
          <Sidebar
            navItems={listItems}
            isOpen={isSidebarOpen}
            onClick={() => setIsSidebarOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
