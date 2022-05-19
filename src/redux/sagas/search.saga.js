import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getUsers() {
  try {
    const response = yield axios.get('/api/search');

    yield put({type: 'SET_LIST_OF_USERS', payload: response.data});
  } catch (error) {
    console.log('Error with search saga:', error);
  }
}

function* searchSaga() {
  yield takeLatest('GET_USERS', getUsers);
}

export default searchSaga;