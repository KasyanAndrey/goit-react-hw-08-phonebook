import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isAdded = useSelector(contactsSelectors.getIsAdded);
  const dispatch = useDispatch();

  const changeName = event => setName(event.target.value);
  const changeNumber = event => setNumber(event.target.value);

  const handleSabmit = event => {
    event.preventDefault();

    if (isAdded(name)) {
      reset();
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  return (
    <form onSubmit={handleSabmit} className={s.form}>
      <p className={s.title}>Name</p>
      <label htmlFor={nameInputId}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          id={nameInputId}
          required
          className={s.input}
        />
      </label>

      <p className={s.title}>Number</p>
      <label htmlFor={numberInputId}>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={changeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          id={numberInputId}
          required
          className={s.input + ' ' + s.number}
        />
      </label>

      <button type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
