import { takeLatest, call, put } from 'redux-saga/effects';
import {
	commentsGetRequested,
	commentsLoaded,
	commentsError,
} from '../modules/CommentsList/actions/CommentsListActions';
import { userUnauthorized } from '../modules/Authorization/actions/UserActions';
import SessionService from '../Services/SessionService';
import actionTypes from '../modules/CommentsList/actions/actionTypes';
import axios from 'axios';

export function* watcherComments() {
	yield takeLatest(actionTypes.COMMENTS_GET_REQUESTED, getCommentsSaga);
	yield takeLatest(actionTypes.COMMENT_SEND_REQUESTED, sendCommentSaga);
}

function axiosComments(action) {
	return axios({
		...action.request,
	});
}

function* getCommentsSaga(action) {
	try {
		const response = yield call(axiosComments, action);
		const comments = response.data;
		yield put(commentsLoaded(comments));
	} catch (error) {
		yield put(commentsError(error.toString()));
	}
}

function* sendCommentSaga(action) {
	try {
		yield call(axiosComments, action);
		yield put(commentsGetRequested(action.request.data.filmId));
	} catch (error) {
		if (error.response) {
			if (error.response.status === 401) {
				yield put(userUnauthorized());
				SessionService.removeAllItems();
				this.props.history.push('/login');
			}
		}
	}
}
