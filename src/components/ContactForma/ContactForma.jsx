import React from 'react';
import { useState } from 'react';
import s from './ContactForma.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

const ContactForma = () => {
  const [name, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const allContacts = useSelector(state => state.contacts);

  const addName = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setUserName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const submitBtn = (name, number) => {
    const normalizedName = name.toLowerCase().trim();
    const checkedForName = allContacts.find(
      contact => normalizedName === contact.name.toLocaleLowerCase()
    );
    const checkedForNumber = allContacts?.find(
      contact => number === contact.number
    );

    if (checkedForName) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (checkedForNumber) {
      alert(`${number} is already in contacts`);
      return;
    }

    const newContact = {
      name: name,
      number: number,
    };

    if (!name || !number) {
      alert('Invalid name or number value!');
      return;
    }
    if (name.trim().length < 1 || number.trim().length < 1) {
      alert('Пробелы не работают! Введите имя или номер корректно');
      return;
    }

    console.log(newContact);
    dispatch(contactsOperations.addContacts(newContact));
  };

  const onSubmit = e => {
    e.preventDefault();

    submitBtn(name, number);

    setUserName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>Name</label>
        <input
          className={s.inputName}
          onChange={addName}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label}>Number</label>
        <input
          className={s.inputName}
          onChange={addName}
          value={number}
          type="tel"
          name="number"
          pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.formBtn} type="submit" onClick={onSubmit}>
          Add name
        </button>
      </form>
    </div>
  );
};

export default ContactForma;
