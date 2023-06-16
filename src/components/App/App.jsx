import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm.jsx/ContactForm';
import Filter from '../Filter.jsx/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, Title, Contacts } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <Contacts>Contacts</Contacts>
          <Filter />
          <ContactList />
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default App;
