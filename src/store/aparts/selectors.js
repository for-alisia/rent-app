import { createSelector } from 'reselect';

export const getIsLoading = (state) => state.aparts.isLoading;
export const getError = (state) => state.aparts.error;
export const getAparts = createSelector(
  (state) => state.aparts.elements,
  (elements) =>
    elements.map(({ id, image, title }) => ({
      id,
      image,
      title,
    }))
);
