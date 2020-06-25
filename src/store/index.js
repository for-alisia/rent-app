import { createStore, compose, applyMiddleware } from 'redux';
import { apartsFetchMiddleware } from './aparts';
import { combineReducers } from 'redux';
import aparts from './aparts';

const rootReducer = combineReducers({
  aparts,
});

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(apartsFetchMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop) => noop
    )
  );

  return store;
};

export default createAppStore;
