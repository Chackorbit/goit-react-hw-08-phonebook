import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavLink
          to="/contacts"
          exact="true"
          style={styles.link}
          activestyle={styles.activeLink}
        >
          Мои контакты
        </NavLink>
      ) : (
        <NavLink
          to="/"
          exact="true"
          style={styles.link}
          activestyle={styles.activeLink}
        >
          Главная
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
