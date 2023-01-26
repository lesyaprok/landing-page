import React from 'react';
import NavItem from '../../atoms/NavItem/NavItem';

const Sidebar = ({ navItems, isOpen, onClick }) => {
  return (
    isOpen && (
      <ul className="fixed w-full mt-2 left-0 bg-light-grey flex flex-col z-50 transition-all shadow-lg">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            path={item.path}
            name={item.name}
            onClick={onClick}
            className="py-3 px-6 border-b border-white last:border-0"
          />
        ))}
      </ul>
    )
  );
};

export default Sidebar;
