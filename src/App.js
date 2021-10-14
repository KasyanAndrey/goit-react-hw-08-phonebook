// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

import Appbar from './components/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';
// import { authOperations } from './redux/auth';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <Appbar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/contacts" exact component={ContactsPage} />
        </Switch>
      </Suspense>
    </Container>
  );
}
