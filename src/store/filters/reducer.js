import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { setFilter, destroyFilters } from './actions';

const currentFilters = handleActions(
  {
    [setFilter]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [destroyFilters]: (_state) => ({}),
  },
  {}
);

export default combineReducers({ currentFilters });
