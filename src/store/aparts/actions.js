import { createAction } from 'redux-actions';

export const fetchApartsRequest = createAction('FETCH_APARTS_REQUEST');
export const fetchApartsSuccess = createAction('FETCH_APARTS_SUCCESS');
export const fetchApartsFailure = createAction('FETCH_APARTS_FAILURE');
export const setPostsPerPage = createAction('SET_POSTS_PER_PAGE');
