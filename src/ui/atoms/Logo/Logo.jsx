import React from 'react';
import logo from './logo.png';

const Logo = () => {
  return (
    <a className="w-fit h-fit" href="/">
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
