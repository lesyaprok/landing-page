import React from 'react';
import Button from '../../atoms/Button/Button';
import sendIcon from './icons/send-2.png';
import sendIconDisabled from './icons/send.png';

const ButtonWithIcon = ({ isPressed, isDisabled, text, type, onClick }) => {
  return (
    <Button isPressed={isPressed} isDisabled={isDisabled} type={type} onClick={onClick}>
      <div className="content flex items-center gap-3 md:gap-3">
        <span>{text}</span>
        <img
          src={isDisabled ? sendIconDisabled : sendIcon}
          alt=""
          className="w-4 h-4 md:w-6 md:h-6"
        />
      </div>
    </Button>
  );
};

export default ButtonWithIcon;
