import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoaded: false,
	isLoadedAllFilms: false,
	error: '',
	films: [],
	page: 1,
};

const FilmsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FILMS_REQUESTED:
			return {
				...state,
				isLoaded: false,
				error: '',
				page: action.page,
			};
		case actionTypes.FILMS_LOADED:
			return {
				...state,
				isLoaded: true,
				films: [...state.films, ...action.films],
				isLoadedAllFilms: state.films.length + 1 === action.totalCount,
			};
		case actionTypes.FILMS_ERROR:
			return {
				...state,
				error: action.error,
				isLoaded: false,
			};
		case actionTypes.FILMS_CLEARED:
			return {
				...state,
				...initialState,
			};
		default:
			return state;
	}
};
export default FilmsListReducer;
