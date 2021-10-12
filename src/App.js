import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Appbar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';

export default function App() {
  return (
    <Container>
      <Appbar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            {/* <MainPage /> */}
          </Route>

          <Route path="/register" exact>
            {/* <MoviesPage /> */}
          </Route>

          <Route path="/login" exact>
            {/* <MoviesPage /> */}
          </Route>

          {/* <Route path="/movies/:movieId"><MovieDetailsPage /></Route> */}

          <Route>{/* <HomePage /> */}</Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
