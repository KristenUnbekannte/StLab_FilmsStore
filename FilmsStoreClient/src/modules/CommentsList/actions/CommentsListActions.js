import actionTypes from './actionTypes';
import baseUrl from '../../../Common/BaseUrl';
import header from '../../../Common/FetchHeader';

export const commentSendRequested = (id, message) => {
	return {
		type: actionTypes.COMMENT_SEND_REQUESTED,
		request: {
			method: 'post',
			url: `${baseUrl}/comment`,
			data: {
				filmId: id,
				message: message,
			},
			headers: header(),
		},
	};
};
export const commentsGetRequested = id => {
	return {
		type: actionTypes.COMMENTS_GET_REQUESTED,
		request: {
			method: 'get',
			url: `${baseUrl}/comment/${id}`,
		},
	};
};
export const commentsLoaded = comments => {
	return {
		type: actionTypes.COMMENTS_LOADED,
		comments,
	};
};
export const commentsError = error => {
	return {
		type: actionTypes.COMMENTS_ERROR,
		error,
	};
};
