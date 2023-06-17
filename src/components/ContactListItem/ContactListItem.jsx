import React, { useEffect } from 'react';
import { Item, Button, Contact } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'api/contacts';

const ContactListItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterByName = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = filterByName(normalizedFilter);

  return filtredContacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <Contact>
          {name}: {number}
        </Contact>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactListItem;
