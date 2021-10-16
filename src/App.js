import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import Appbar from './components/AppBar';
import Container from './components/Container/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
// const UploadPage = lazy(() => import('./pages/UploadPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        (console.log('Показываем React Skeleton'),
        (<h1>Показываем React Skeleton</h1>))
      ) : (
        <>
          <Appbar />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/">
                <ContactsPage />
              </PrivateRoute>
              {/* <PrivateRoute path="/upload" redirectTo="/login">
                <UploadPage />
              </PrivateRoute> */}
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
