// import { useSelector } from 'react-redux';
// import UserMenu from './UserMenu';
// import AuthNav from './AuthNav';
// import { authSelectors } from '../redux/auth';

// import Navigation from '../Navigation/Navigation';

// import s from './Appbar.module.css';

// export default function Appbar() {
//   // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <header className={s.header}>
//       <Navigation />
//       {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
//     </header>
//   );
// }

/* 
import { useSelector } from 'react-redux';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
*/