import { fetchApartsFailure, fetchApartsSuccess, fetchApartsRequest } from './actions';
import { tempData } from './tempData';

export const apartsFetchMiddleware = (store) => (next) => (action) => {
  if (action.type === fetchApartsRequest.toString()) {
    // fetch(`http://api.tvmaze.com/shows/${action.payload}/episodes`)
    //   .then((response) => response.json())
    //   .then((series) => {
    //     store.dispatch(fetchSeriesSuccess(series));
    //   })
    //   .catch((error) => {
    //     store.dispatch(fetchSeriesFailure(error));
    //   });
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(tempData);
      }, 1000);
    })
      .then((aparts) => {
        store.dispatch(fetchApartsSuccess(aparts));
      })
      .catch((error) => {
        store.dispatch(fetchApartsFailure(error));
      });
  }
  return next(action);
};
