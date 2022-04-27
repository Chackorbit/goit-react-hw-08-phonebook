import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import UserContacts from './UserContacts';

export default function App() {
  return (
    <div className={s.section}>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<UserContacts />} />
      </Routes>

      {/* <p className={s.title}>Phonebook</p>
      <ContactForma />

      <p className={s.title}>Contacts</p>
      <Filter />
      <ContactList /> */}
    </div>
  );
}
