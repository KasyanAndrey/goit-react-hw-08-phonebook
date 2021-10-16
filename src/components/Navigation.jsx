import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            Contacts
          </NavLink>
          {/* <NavLink
            to="/upload"
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            Загрузить
          </NavLink> */}
        </>
      )}
    </nav>
  );
};

export default Navigation;
