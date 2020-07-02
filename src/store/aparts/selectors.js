import { createSelector } from 'reselect';

export const getIsLoading = (state) => state.aparts.isLoading;
export const getError = (state) => state.aparts.error;
export const getPostsPerPage = (state) => state.aparts.postsPerPage;
export const getAparts = (state) => state.aparts.elements;

export const getApartsPerPage = createSelector([getAparts, getPostsPerPage], (aparts, page) => {
  return aparts.slice(0, page);
});
export const getFeaturedAparts = createSelector([getAparts], (aparts) => {
  return aparts.filter((apart) => apart.featured);
});
