import { takeLatest, call, put } from 'redux-saga/effects';
import {
	userRatingSet,
	updateTotalRatingRequested,
} from '../modules/FilmDetails/actions/FilmDetailsActions';
import { ratingCleared } from '../modules/StarsRating/actions/RatingActions';
import { userUnauthorized } from '../modules/Authorization/actions/UserActions';
import SessionService from '../Services/SessionService';
import actionTypes from '../modules/StarsRating/actions/actionTypes';
import axios from 'axios';

export function* watcherRating() {
	yield takeLatest(actionTypes.RATING_SEND_REQUESTED, workerRatingSaga);
}

function fetchRating(action) {
	return axios({
		...action.request,
	});
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
				SessionService.removeAllItems();
				action.history.push('/login');
			}
		}
	}
}
