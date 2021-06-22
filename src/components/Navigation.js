import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontSize: 22,
    fontWeight: 600,
    color: '#cce0ff',
  },

  activeLink: {
    color: '#0066ff',
    fontSize: 32,
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
