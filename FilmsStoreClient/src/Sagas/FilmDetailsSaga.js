import { takeLatest, call, put } from 'redux-saga/effects';
import {
	filmDetailsLoaded,
	filmDetailsError,
	totalRatingChanged,
	userRatingSet,
	userRatingReset,
} from '../modules/FilmDetails/actions/FilmDetailsActions';
import actionTypes from '../modules/FilmDetails/actions/actionTypes';
import axios from 'axios';

export function* watcherFilmDetails() {
	yield takeLatest(actionTypes.FILM_DETAILS_REQUESTED, filmRequestSaga);
	yield takeLatest(actionTypes.UPDATE_TOTAL_RATING_REQUESTED, updateRatingSaga);
	yield takeLatest(actionTypes.USER_RATING_REQUESTED, userRatingSaga);
}

function axiosFilmDetails(action) {
	return axios({
		...action.request,
	});
}

function* filmRequestSaga(action) {
	try {
		const response = yield call(axiosFilmDetails, action);
		const films = response.data;
		yield put(filmDetailsLoaded(films));
	} catch (error) {
		yield put(filmDetailsError(error.toString()));
	}
}

function* updateRatingSaga(action) {
	try {
		const response = yield call(axiosFilmDetails, action);
		const rating = response.data;
		yield put(totalRatingChanged(rating));
	} catch (error) {
		console.log(error);
	}
}

function* userRatingSaga(action) {
	try {
		const response = yield call(axiosFilmDetails, action);
		yield put(userRatingSet(response.data));
	} catch (error) {
		yield put(userRatingReset());
	}
}
