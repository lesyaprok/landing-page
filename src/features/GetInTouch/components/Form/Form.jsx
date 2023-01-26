import React, { useState, useEffect } from 'react';
import Input from '../../../../ui/atoms/Input/Input';
import Textarea from '../../../../ui/atoms/Textarea/Textarea';
import ButtonWithIcon from '../../../../ui/molecules/ButtonWithIcon/ButtonWithIcon';
import styles from './Form.module.css';

const Form = () => {
  const [name, setName] = useState({ name: '', isError: false });
  const [email, setEmail] = useState({ email: '', isError: '' });
  const [textareaText, setTextareaText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.name) {
      setName({ ...name, isError: true });
    }
    if (!email.email) {
      setEmail({ ...email, isError: true });
    } else if (name.name && email.email) {
      console.log(
        JSON.stringify({
          Name: name.name,
          Email: email.email,
          Text: textareaText,
        })
      );
    }
  };

  useEffect(() => {
    if (name.name) setName((prev) => ({ ...prev, isError: false }));
  }, [name.name]);
  useEffect(() => {
    if (email.email) setEmail((prev) => ({ ...prev, isError: false }));
  }, [email.email]);

  return (
    <form
      action=""
      method="post"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.title}>Let&apos;s discuss your project</h2>
      <div className="flex flex-col gap-6 md:gap-[50px] lg:gap-9">
        <div className="flex flex-col gap-6 md:gap-6 lg:gap-5 md:flex-row">
          <Input
            id="fullname"
            title="Your full name"
            icon="person"
            placeholder="Name Surname"
            type="text"
            isError={name.isError}
            value={name.name}
            onChange={(e) => setName({ ...name, name: e.target.value })}
          />
          <Input
            id="email"
            title="Your email"
            placeholder="name@example.com"
            icon="mail"
            type="email"
            isError={email.isError}
            value={email.email}
            onChange={(e) => setEmail({ ...email, email: e.target.value })}
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
        <ButtonWithIcon text="Submit" type="submit" />
      </div>
    </form>
  );
};

export default Form;
