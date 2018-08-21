import actionTypes from './actionTypes';

export const commentsLoading = () => {
	return {
		type: actionTypes.COMMENTS_LOADING,
	};
};
export const commentsLoaded = (comments) => {
	return {
		type: actionTypes.COMMENTS_LOADED,
		comments
	};
};
export const commentsError = (error) => {
	return {
		type: actionTypes.COMMENTS_ERROR,
		error
	};
};