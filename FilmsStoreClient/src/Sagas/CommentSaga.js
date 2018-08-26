import { takeLatest, call, put } from 'redux-saga/effects';
import {
	commentsGetRequested,
	commentsLoaded,
	commentsError,
} from '../modules/CommentsList/actions/CommentsListActions';
import { userUnauthorized } from '../modules/Authorization/actions/UserActions';
import TokenService from '../Services/TokenService';
import axios from 'axios';

export function* watcherComments() {
	yield takeLatest('COMMENTS_GET_REQUESTED', getCommentsSaga);
	yield takeLatest('COMMENT_SEND_REQUESTED', sendCommentSaga);
}

function fetchComments(action) {
	return axios({
		...action.request,
	});
}

function* getCommentsSaga(action) {
	try {
		const response = yield call(fetchComments, action);
		const comments = response.data;
		yield put(commentsLoaded(comments));
	} catch (error) {
		yield put(commentsError(error.toString()));
	}
}

function* sendCommentSaga(action) {
	try {
		yield call(fetchComments, action);
		yield put(commentsGetRequested(action.request.data.filmId));
	} catch (error) {
		if (error.response) {
			if (error.response.status === 401) {
				yield put(userUnauthorized());
				TokenService.removeToken();
				this.props.history.push('/login');
			}
		}
	}
}
