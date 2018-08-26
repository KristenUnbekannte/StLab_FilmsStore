import actionTypes from './actionTypes';
import baseUrl from '../../../Common/BaseUrl';

export const filmsRequested = () => {
	return {
		type: actionTypes.FILMS_REQUESTED,
		request: {
			method: 'get',
			url: `${baseUrl}/films`,
		},
	};
};
export const filmsLoaded = films => {
	return {
		type: actionTypes.FILMS_LOADED,
		films,
	};
};
export const filmsError = error => {
	return {
		type: actionTypes.FILMS_ERROR,
		error,
	};
};
