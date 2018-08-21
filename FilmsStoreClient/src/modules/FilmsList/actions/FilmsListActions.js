import actionTypes from './actionTypes';

export const filmsLoading = () => {
	return {
		type: actionTypes.FILMS_LOADING,
	};
};
export const filmsLoaded = (films) => {
	return {
		type: actionTypes.FILMS_LOADED,
		films
	};
};
export const filmsError = (error) => {
	return {
		type: actionTypes.FILMS_ERROR,
		error
	};
};