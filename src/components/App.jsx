import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
// import LoginView from 'views/LoginView';
// import HomeView from 'views/HomeView';
// import RegisterView from 'views/RegisterView';
// import UserContacts from './UserContacts';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { authOperations } from 'redux/auth';
import PrivateRoute from './UserMenu/PrivateRoute';

const HomeView = lazy(() => import('views/HomeView'));
const UserContacts = lazy(() => import('./UserContacts'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.section}>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <UserContacts />
            </PrivateRoute>
          }
        />
      </Routes>

      {/* <PrivateRoute path="/contacts">
        <UserContacts />
      </PrivateRoute> */}

      {/* <p className={s.title}>Phonebook</p>
      <ContactForma />

      <p className={s.title}>Contacts</p>
      <Filter />
      <ContactList /> */}
    </div>
  );
}
