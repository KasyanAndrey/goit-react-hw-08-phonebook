import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';


import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onDeletContacts = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.text}>{name}: {number}</p>
          <button onClick={() => onDeletContacts(id)} className={s.btn + ' ' + s.text}></button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
