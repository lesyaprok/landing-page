import React from 'react';
import styles from './Button.module.css';

const Button = ({ isPressed, isDisabled, children}) => {
  let buttonStyle = 'bg-lavender text-white hover:bg-lavender-dark';
  if (isPressed)
    buttonStyle = 'bg-lavender border-[3px] border-lavender-light text-white';
  else if (isDisabled)
    buttonStyle = 'bg-light-grey text-grey hover:bg-light-grey';

  return (
    <button type="submit" className={`${styles.button} ${buttonStyle}`}>
      {children}
    </button>
  );
};

export default Button;
