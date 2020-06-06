import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundary from './components/ErrorBoundry';
import ApartService from './services/apartService';
import { ApartServiceProvider } from './components/ApartServiceContext';

import store from './store';

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
