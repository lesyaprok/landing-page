import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({ id, title, placeholder, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.title}>
        {title}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        className={styles.textarea}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
