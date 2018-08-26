import { takeLatest, call, put } from 'redux-saga/effects';
import {
	userRatingSet,
	userRatingReset,
	updateTotalRatingRequested,
} from '../modules/FilmDetails/actions/FilmDetailsActions';
import { ratingCleared } from '../modules/StarsRating/actions/RatingActions';
import { userUnauthorized } from '../modules/Authorization/actions/UserActions';
import TokenService from '../Services/TokenService';
import axios from 'axios';

export function* watcherRating() {
	yield takeLatest('USER_RATING_REQUESTED', workerSaga);
	yield takeLatest('RATING_SEND_REQUESTED', workerRatingSaga);
}

function fetchRating(action) {
	return axios({
		...action.request,
	});
}

function* workerSaga(action) {
	try {
		const response = yield call(fetchRating, action);
		yield put(userRatingSet(response.data));
	} catch (error) {
		yield put(userRatingReset());
	}
}

function* workerRatingSaga(action) {
	try {
		yield call(fetchRating, action);
		yield put(userRatingSet(true));
		yield put(ratingCleared());
		yield put(updateTotalRatingRequested(action.request.data.filmId));
	} catch (error) {
		if (error.response) {
			if (error.response.status === 401) {
				yield put(userUnauthorized());
				TokenService.removeToken();
				action.history.push('/login');
			}
		}
	}
}
