import actionTypes from './actionTypes';
import baseUrl from '../../../Common/BaseUrl';
import header from '../../../Common/AxiosHeader';

export const filmDetailsRequested = id => {
	return {
		type: actionTypes.FILM_DETAILS_REQUESTED,
		request: {
			method: 'get',
			url: `${baseUrl}/films/${id}`,
		},
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
export const filmDetailsCleared = () => {
	return {
		type: actionTypes.FILM_DETAILS_CLEARED,
	};
};
export const userRatingRequested = id => {
	return {
		type: actionTypes.USER_RATING_REQUESTED,
		request: {
			method: 'get',
			url: `${baseUrl}/rating/${id}`,
			headers: header(),
		},
	};
};
export const userRatingSet = value => {
	return {
		type: actionTypes.USER_RATING_SET,
		value,
	};
};
export const userRatingReset = () => {
	return {
		type: actionTypes.USER_RATING_RESET,
	};
};
export const updateTotalRatingRequested = id => {
	return {
		type: actionTypes.UPDATE_TOTAL_RATING_REQUESTED,
		request: {
			method: 'get',
			url: `${baseUrl}/films/rating/${id}`,
		},
	};
};
export const totalRatingChanged = value => {
	return {
		type: actionTypes.TOTAL_RATING_CHANGED,
		value,
	};
};
