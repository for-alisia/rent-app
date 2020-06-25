import { fetchApartsFailure, fetchApartsSuccess, fetchApartsRequest } from './actions';

const tempData = [
  {
    id: 1,
    title: 'Апартаменты на Вавилова',
    district: 'Центральный',
    address: 'ул.Вавилова, д.27',
    area: 120,
    bedroom: 2,
    image: 'https://image.freepik.com/free-photo/minimalist-dining-living-room-design_23-2148291620.jpg',
  },
  {
    id: 2,
    title: 'Апартаменты на Луговой',
    district: 'Восточный',
    address: 'ул.Луговая, д.44',
    area: 65,
    bedroom: 1,
    image: 'https://image.freepik.com/free-photo/front-view-chair-room-with-plant-decoration_23-2148560899.jpg',
  },
  {
    id: 3,
    title: 'Апартаменты на Вавилова',
    district: 'Центральный',
    address: 'ул.Вавилова, д.27',
    area: 120,
    bedroom: 2,
    image: 'https://image.freepik.com/free-photo/minimalist-dining-living-room-design_23-2148291620.jpg',
  },
  {
    id: 4,
    title: 'Апартаменты на Луговой',
    district: 'Восточный',
    address: 'ул.Луговая, д.44',
    area: 65,
    bedroom: 1,
    image: 'https://image.freepik.com/free-photo/front-view-chair-room-with-plant-decoration_23-2148560899.jpg',
  },
  {
    id: 5,
    title: 'Апартаменты на Вавилова',
    district: 'Центральный',
    address: 'ул.Вавилова, д.27',
    area: 120,
    bedroom: 2,
    image: 'https://image.freepik.com/free-photo/minimalist-dining-living-room-design_23-2148291620.jpg',
  },
  {
    id: 6,
    title: 'Апартаменты на Луговой',
    district: 'Восточный',
    address: 'ул.Луговая, д.44',
    area: 65,
    bedroom: 1,
    image: 'https://image.freepik.com/free-photo/front-view-chair-room-with-plant-decoration_23-2148560899.jpg',
  },
];
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
