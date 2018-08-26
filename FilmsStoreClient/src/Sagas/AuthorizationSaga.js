import { takeLatest, call, put } from 'redux-saga/effects';
import {
	userAuthorized,
	authErrorSet,
} from '../modules/Authorization/actions/UserActions';
import TokenService from '../Services/TokenService';
import axios from 'axios';

export function* watcherAuth() {
	yield takeLatest('AUTH_REQUESTED', workerSaga);
}

function fetchAuth(action) {
	return axios({
		...action.request,
	});
}

function* workerSaga(action) {
	try {
		const response = yield call(fetchAuth, action);
		TokenService.setToken(response.data.access_token);
		yield put(userAuthorized());
		yield action.history.push(window.history.back());
	} catch (error) {
		error.response
			? yield put(authErrorSet(error.response.data.toString()))
			: yield put(authErrorSet(error.toString()));
	}
}
