import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../Pages/HomePage';
import ApartsPage from '../../Pages/ApartsPage';
import AboutPage from '../../Pages/AboutPage';
import Reviews from '../../Pages/Reviews';
import ApartDetail from '../../Pages/ApartDetail';
import NotFound from '../../Pages/NotFound';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/apartaments" component={ApartsPage} exact />
      <Route path="/apartaments/:apartId" component={ApartDetail} />
      <Route path="/about" component={AboutPage} />
      <Route path="/reviews" component={Reviews} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
