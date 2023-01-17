import React from 'react';
import Form from './components/Form/Form';
import styles from './GetInTouch.module.css';

const GetInTouch = () => {

  return (
    <div className={styles.getInTouch} id="get_in_touch">
      <div className={styles.wrapper}>
        <Form />
      </div>
    </div>
  );
};

export default GetInTouch;
