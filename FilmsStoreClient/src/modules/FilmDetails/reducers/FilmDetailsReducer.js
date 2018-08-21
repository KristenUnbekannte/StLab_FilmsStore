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
	description: '',
	images: [],
};

const FilmDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FILM_DETAILS_LOADING:
			return {
				...state,
				isLoaded: false,
			};
		case actionTypes.FILM_DETAILS_LOADED:
			return {
				...state,
				...action.film,
				isLoaded: true,
			};
		case actionTypes.FILM_DETAILS_ERROR:
			return {
				...state,
				error: action.error,
			};
		case actionTypes.TOTAL_RATING_CHANGED:
			return {
				...state,
				rating: action.value,
			};
		default:
			return state;
	}
};
export default FilmDetailsReducer;
