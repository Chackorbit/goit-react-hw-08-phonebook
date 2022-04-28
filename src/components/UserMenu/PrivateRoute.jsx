import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

// Создаем приватные маршруты
export default function PrivateRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
