import React from 'react';
import styles from './Input.module.css';
import errorIcon from './icons/error.png';

const Input = ({
  id,
  title,
  placeholder,
  type,
  icon,
  isError,
  onChange,
  value,
}) => {
  const img = require(`./icons/${!value.length ? icon : `${icon}-active`}.png`);

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.title}>
        {title}
        <span className={styles.required}> *</span>
      </label>
      <div className="relative">
        <img src={isError ? errorIcon : img} alt="" className={styles.icon} />
        <input
          className={`${styles.input} ${isError ? 'border-red' : 'border-light-grey'
            }`}
          type={type}
          placeholder={placeholder}
          id={id}
          onChange={onChange}
          value={value}
        />
      </div>
      {isError && (
        <p className={styles.error}>Please fill this mandatory field</p>
      )}
    </div>
  );
};

export default Input;
