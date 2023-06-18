import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../ContactForm.jsx/ContactForm';
import Filter from '../Filter.jsx/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, Title, Contacts } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getLoading } from 'redux/selectors';
import { fetchContacts } from 'api/contacts';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {error && <Error />}
      {contacts.length !== 0 && (
        <>
          <Contacts>Contacts</Contacts>
          <Filter />
          {!isLoading && <ContactList />}
        </>
      )}
      <ToastContainer />
    </Container>
  );
};

export default App;
