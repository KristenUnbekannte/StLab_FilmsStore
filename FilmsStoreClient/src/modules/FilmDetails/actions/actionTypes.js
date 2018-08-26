import keymirror from 'keymirror';

const actions = keymirror({
	FILM_DETAILS_REQUESTED: null,
	FILM_DETAILS_LOADED: null,
	FILM_DETAILS_ERROR: null,
	USER_RATING_REQUESTED: null,
	USER_RATING_SET: null,
	USER_RATING_RESET: null,
	UPDATE_TOTAL_RATING_REQUESTED: null,
	TOTAL_RATING_CHANGED: null,
});

export default actions;
