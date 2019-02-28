import { takeLatest, call, put } from 'redux-saga/effects';
import {
	filmsLoaded,
	filmsError,
} from '../modules/FilmsList/actions/FilmsListActions';
import actionTypes from '../modules/FilmsList/actions/actionTypes';
import axios from 'axios';

export function* watcherFilms() {
  yield takeLatest(actionTypes.FILMS_REQUESTED, workerSaga);
  yield takeLatest(actionTypes.ALL_FILMS_REQUESTED, workerSaga);
}

function fetchFilms(action) {
	return axios({
		...action.request,
	});
}

function* workerSaga(action) {
	try {
		const response = yield call(fetchFilms, action);
		const { films, totalCount } = response.data;
		yield put(filmsLoaded(films, totalCount));
	} catch (error) {
		yield put(filmsError(error.toString()));
	}
}
