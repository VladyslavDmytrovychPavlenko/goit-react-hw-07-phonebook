import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedFind = name.toLowerCase();
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFind
    );

    if (existingContact) {
      return alert(`${name} is already in contacts.`);
    }

    if (name && phone) {
      dispatch(addContact({ name, phone }));
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>Name</label>
      <input
        type="text"
        name="name"
        className={style.input}
        placeholder="Add a name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <label className={style.label}>Number</label>
      <input
        type="tel"
        name="phone"
        className={style.input}
        placeholder="Add a number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={phone}
        onChange={event => setNumber(event.target.value)}
      />

      <button type="submit" className={style.btn}>
        Add
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
