import ContactForma from './ContactForma/ContactForma';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

export default function UserContacts() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        backgroundColor: 'rgb(148, 210, 212)',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <p className={s.title}>Phonebook</p>
      <ContactForma />

      <p className={s.title}>Contacts</p>
      <Filter />
      <ContactList />
    </div>
  );
}
