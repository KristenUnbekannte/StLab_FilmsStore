import actionTypes from './actionTypes';

export const filmDetailsLoading = () => {
	return {
		type: actionTypes.FILM_DETAILS_LOADING,
	};
};
export const filmDetailsLoaded = film => {
	return {
		type: actionTypes.FILM_DETAILS_LOADED,
		film,
	};
};
export const filmDetailsError = error => {
	return {
		type: actionTypes.FILM_DETAILS_ERROR,
		error,
	};
};
export const totalRatingChanged = value => {
	return {
		type: actionTypes.TOTAL_RATING_CHANGED,
		value,
	};
};
