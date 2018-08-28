import { takeLatest, call, put } from 'redux-saga/effects';
import { filmsRequested } from '../modules/FilmsList/actions/FilmsListActions';
import axios from 'axios';
import actionTypes from '../modules/Admin/actions/actionTypes';

export function* watcherAdminFilm() {
	yield takeLatest(actionTypes.FILM_ADD_REQUESTED, addFilmSaga);
	yield takeLatest(actionTypes.FILM_DELETE_REQUESTED, deleteFilmSaga);
}

function axiosAdminFilm(action) {
	return axios({
		...action.request,
	});
}

function* addFilmSaga(action) {
	try {
		yield call(axiosAdminFilm, action);
		action.history.push('/admin');
	} catch (error) {}
}

function* deleteFilmSaga(action) {
	try {
		yield call(axiosAdminFilm, action);
		yield put(filmsRequested());
	} catch (error) {}
}
