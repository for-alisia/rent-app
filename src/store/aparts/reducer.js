import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { fetchApartsRequest, fetchApartsSuccess, fetchApartsFailure, setPostsPerPage } from './actions';

const elements = handleActions(
  {
    [fetchApartsRequest]: () => [],
    [fetchApartsSuccess]: (_state, action) => action.payload,
  },
  []
);

const isLoading = handleActions(
  {
    [fetchApartsRequest]: () => true,
    [fetchApartsSuccess]: () => false,
    [fetchApartsFailure]: () => false,
  },
  false
);

const error = handleActions(
  {
    [fetchApartsRequest]: () => null,
    [fetchApartsFailure]: (_state, action) => action.payload,
  },
  null
);

const postsPerPage = handleActions(
  {
    [setPostsPerPage]: (_state, action) => action.payload,
  },
  9
);

export default combineReducers({
  elements,
  isLoading,
  error,
  postsPerPage,
});
