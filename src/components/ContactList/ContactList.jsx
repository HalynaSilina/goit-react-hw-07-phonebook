import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = () => {
  return (
    <List>
      <ContactListItem />
    </List>
  );
};

export default ContactList;
