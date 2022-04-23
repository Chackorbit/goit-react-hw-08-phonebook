import ContactForma from './ContactForma/ContactForma';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className={s.section}>
      <Routes>
        <Route exact path="/" />
        <Route exact path="/register" />
        <Route exact path="/login" />
        <Route exact path="/contacts" />
      </Routes>

      <p className={s.title}>Phonebook</p>
      <ContactForma />

      <p className={s.title}>Contacts</p>
      <Filter />
      <ContactList />
    </div>
  );
}
