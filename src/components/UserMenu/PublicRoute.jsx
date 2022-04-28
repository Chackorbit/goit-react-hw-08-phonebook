import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({ children, restricted = false }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  //   console.log('~ shouldRedirect', shouldRedirect);

  return shouldRedirect ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    children
  );
}
