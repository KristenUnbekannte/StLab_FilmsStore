import { takeLatest, call, put } from 'redux-saga/effects';
import {
	filmDetailsLoaded,
	filmDetailsError,
	totalRatingChanged,
} from '../modules/FilmDetails/actions/FilmDetailsActions';
import axios from 'axios';

export function* watcherFilmDetails() {
	yield takeLatest('FILM_DETAILS_REQUESTED', filmSaga);
	yield takeLatest('UPDATE_TOTAL_RATING_REQUESTED', ratingSaga);
}

function fetchFilmDetails(action) {
	return axios({
		...action.request,
	});
}

function* filmSaga(action) {
	try {
		const response = yield call(fetchFilmDetails, action);
		const films = response.data;
		yield put(filmDetailsLoaded(films));
	} catch (error) {
		yield put(filmDetailsError(error.toString()));
	}
}

function* ratingSaga(action) {
	try {
		const response = yield call(fetchFilmDetails, action);
		const rating = response.data;
		yield put(totalRatingChanged(rating));
	} catch (error) {
		console.log(error);
	}
}
