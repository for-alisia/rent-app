import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './serviceComponents/ErrorBoundry';
import ApartService from './services/apartService';
import { ApartServiceProvider } from './serviceComponents/ApartServiceContext';

import store from './store';

import './styles/main.scss';

const apartService = new ApartService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ApartServiceProvider value={apartService}>
        <Router>
          <App />
        </Router>
      </ApartServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
