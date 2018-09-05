import actionTypes from './actionTypes';
import baseUrl from '../../../Common/BaseUrl';

export const filmsRequested = (page = 1, search) => {
	const params = search ? `page=${page}&search=${search}` : `page=${page}`;
	return {
		type: actionTypes.FILMS_REQUESTED,
		request: {
			method: 'get',
			url: `${baseUrl}/films?${params}`,
		},
		page,
		search,
	};
};
export const filmsLoaded = (films, totalCount) => {
	return {
		type: actionTypes.FILMS_LOADED,
		films,
		totalCount,
	};
};
export const filmsError = error => {
	return {
		type: actionTypes.FILMS_ERROR,
		error,
	};
};
export const filmsCleared = () => {
	return {
		type: actionTypes.FILMS_CLEARED,
	};
};
