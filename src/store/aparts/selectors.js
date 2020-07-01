import { createSelector } from 'reselect';

export const getIsLoading = (state) => state.aparts.isLoading;
export const getError = (state) => state.aparts.error;
export const getAparts = (state) => state.aparts.elements;
