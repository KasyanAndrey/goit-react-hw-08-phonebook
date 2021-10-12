import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Main page
    </NavLink>
    <NavLink to="/register" className={s.link} activeClassName={s.activeLink}>
      Sing up
    </NavLink>
    <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
      Sing in
    </NavLink>
  </nav>
);

export default Navigation;
