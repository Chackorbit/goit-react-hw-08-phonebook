import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import * as React from 'react';

// Создаем приватные маршруты
export default function PrivateRoute({ ...children }) {
  console.log('~ children', children);
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log('~ isLoggedIn', isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
