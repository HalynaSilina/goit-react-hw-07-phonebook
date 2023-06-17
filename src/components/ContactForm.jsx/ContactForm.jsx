import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'api/contacts';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleInputChange = ({ target: { name, value } }) => {
    const normalizedValue = value.toLowerCase();
    if (name === 'number')
      if (contacts.some(contact => contact.number === value))
        toast.error(`Number ${value} is also in contacts`, {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      else setNumber(value);
    if (name === 'userName')
      if (
        contacts.some(contact => contact.name.toLowerCase() === normalizedValue)
      )
        toast.error(`${value} also in your list`, {
          position: 'top-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      else setUserName(value);
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ name: userName, phoneNumber: number }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="userName"
          value={userName}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
