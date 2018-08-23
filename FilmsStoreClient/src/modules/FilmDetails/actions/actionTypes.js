import keymirror from 'keymirror';

const actions = keymirror({
	FILM_DETAILS_LOADING: null,
	FILM_DETAILS_LOADED: null,
	FILM_DETAILS_ERROR: null,
	TOTAL_RATING_CHANGED: null,
	USER_RATING_SET: null,
	USER_RATING_RESET: null,
});

export default actions;
