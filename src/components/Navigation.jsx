import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Main page
    </NavLink>
    <NavLink to="/contacts" exact className={s.link} activeClassName={s.activeLink}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
