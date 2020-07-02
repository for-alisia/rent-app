import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchApartsRequest, fetchApartsSuccess, fetchApartsFailure } from './actions';
import { tempData } from './tempData';

export function* handleAparts() {
  yield takeLatest(fetchApartsRequest, function* () {
    try {
      const result = yield call(getAparts);
      yield put(fetchApartsSuccess(result));
    } catch (err) {
      yield put(fetchApartsFailure(err));
    }
  });
}

function getAparts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tempData);
    }, 1000);
  });
}
