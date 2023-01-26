import React, { useState } from 'react';
import Input from '../../../../ui/atoms/Input/Input';
import Textarea from '../../../../ui/atoms/Textarea/Textarea';
import ButtonWithIcon from '../../../../ui/molecules/ButtonWithIcon/ButtonWithIcon';
import styles from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textareaText, setTextareaText] = useState('');

  return (
    <form action="" className={styles.form}>
      <h2 className={styles.title}>Let&apos;s discuss your project</h2>
      <div className="flex flex-col gap-6 md:gap-[50px] lg:gap-9">
        <div className="flex flex-col gap-6 md:gap-6 lg:gap-5 md:flex-row">
          <Input
            id="fullname"
            title="Your full name"
            icon="person"
            placeholder="Name Surname"
            type="text"
            isError={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            id="email"
            title="Your email"
            placeholder="name@example.com"
            icon="mail"
            type="email"
            isError={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Textarea
          title="Tell me about your project"
          placeholder="Add here a general description of your idea and target aim"
          value={textareaText}
          onChange={(e) => setTextareaText(e.target.value)}
        />
      </div>
      <div>
        <ButtonWithIcon text="Submit"/>
      </div>
    </form>
  );
};

export default Form;
