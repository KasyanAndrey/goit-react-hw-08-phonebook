import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../components/Container';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

import s from './stylesPage/ContactsPage.module.css'

export default function ContactPage(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <div className={s.bar}>
        <Filter/>
                

        {isLoadingContacts && <h1>Загружаем...</h1>}
      </div>

      <ContactList />
        <Stats />
        <IconButton onClick={toggleModal} >Add contact</IconButton>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
            <ContactForm onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
