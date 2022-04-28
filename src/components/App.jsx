import s from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import UserContacts from './UserContacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations, authSelectors } from 'redux/auth';

import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';

// const HomeView = lazy(() => import('views/HomeView'));
// const UserContacts = lazy(() => import('./UserContacts'));
// const RegisterView = lazy(() => import('views/RegisterView'));
// const LoginView = lazy(() => import('views/LoginView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.section}>
      <AppBar />
      {!isFetchingCurrentUser && (
        <Routes>
          <Route
            exact
            path="/goit-react-hw-08-phonebook"
            element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginView />
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <UserContacts />
              </PrivateRoute>
            }
          />
        </Routes>
      )}
    </div>
  );
}
