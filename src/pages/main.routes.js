import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const Dashboard = loadable(() => {
  return import('pages/dashboard');
});

const Login = loadable(() => {
  return import('pages/login');
});

const Movie = loadable(() => {
  return import('pages/movie');
});

const Theater = loadable(() => {
  return import('pages/theater');
});

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="dashboard" component={Dashboard} />
      <Route exact path="login" component={Login} />
      <Route exact path="movie" component={Movie} />
      <Route exact path="theater" component={Theater} />
    </Switch>
  );
};

export default withRouter(MainRoutes);
