import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoaded: false,
	error: '',
	filmId: 0,
	name: '',
	country: '',
	year: 0,
	genre: '',
	producer: '',
	rating: 0,
	imageUrl: '',
	videoUrl: '',
	description: '',
	images: [],
	isUserRated: false,
};

const FilmDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FILM_DETAILS_REQUESTED:
			return {
				...state,
				isLoaded: false,
			};
		case actionTypes.FILM_DETAILS_LOADED:
			return {
				...state,
				...action.film,
				isLoaded: true,
				error: '',
			};
		case actionTypes.FILM_DETAILS_ERROR:
			return {
				...state,
				error: action.error,
				isLoaded: false,
			};
		case actionTypes.USER_RATING_REQUESTED:
			return {
				...state,
			};
		case actionTypes.UPDATE_TOTAL_RATING_REQUESTED:
			return {
				...state,
			};
		case actionTypes.TOTAL_RATING_CHANGED:
			return {
				...state,
				rating: action.value,
			};
		case actionTypes.USER_RATING_SET:
			return {
				...state,
				isUserRated: action.value,
			};
		case actionTypes.USER_RATING_RESET:
			return {
				...state,
				isUserRated: false,
			};
		default:
			return state;
	}
};
export default FilmDetailsReducer;
