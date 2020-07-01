import { createSelector } from 'reselect';

export const getFilters = (state) => state.filters.currentFilters;
