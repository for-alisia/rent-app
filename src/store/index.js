import { createStore, compose, applyMiddleware } from 'redux';
// Apart Saga
import { handleAparts } from './aparts';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// Reducers
import aparts from './aparts';
import filters from './filters';

const rootReducer = combineReducers({
  aparts,
  filters,
});

const apartsSagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(apartsSagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop
    )
  );

  apartsSagaMiddleware.run(handleAparts);

  return store;
};

export default createAppStore;
