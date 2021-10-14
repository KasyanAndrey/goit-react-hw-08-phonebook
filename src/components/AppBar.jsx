import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import { authSelectors } from '../redux/auth';


import s from './Appbar.module.css';

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}