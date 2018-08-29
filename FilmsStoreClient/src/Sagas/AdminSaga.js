import { takeLatest, call, put } from 'redux-saga/effects';
import { filmsRequested } from '../modules/FilmsList/actions/FilmsListActions';
import { imagesRequested } from '../modules/ImagesList/actions/ImagesActions';
import axios from 'axios';
import actionTypes from '../modules/Admin/actions/actionTypes';

export function* watcherAdminFilm() {
	yield takeLatest(actionTypes.FILM_ADD_REQUESTED, addFilmSaga);
	yield takeLatest(actionTypes.FILM_DELETE_REQUESTED, deleteFilmSaga);
	yield takeLatest(actionTypes.IMAGE_ADD_REQUESTED, addImageSaga);
	yield takeLatest(actionTypes.IMAGE_DELETE_REQUESTED, deleteImageSaga);
}

function axiosAdmin(action) {
	return axios({
		...action.request,
	});
}

function* addFilmSaga(action) {
	try {
		yield call(axiosAdmin, action);
		action.history.push('/admin');
	} catch (error) {}
}

function* deleteFilmSaga(action) {
	try {
		yield call(axiosAdmin, action);
		yield put(filmsRequested());
	} catch (error) {}
}

function* addImageSaga(action) {
	try {
		yield call(axiosAdmin, action);
		yield put(imagesRequested(action.request.data.filmId));
	} catch (error) {}
}

function* deleteImageSaga(action) {
	try {
		const response = yield call(axiosAdmin, action);
		yield put(imagesRequested(response.data.filmId));
	} catch (error) {}
}
