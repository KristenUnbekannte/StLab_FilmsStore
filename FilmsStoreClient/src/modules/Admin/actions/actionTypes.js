import keymirror from 'keymirror';

const actions = keymirror({
	FILM_ADD_REQUESTED: null,
	FILM_DELETE_REQUESTED: null,
	IMAGE_ADD_REQUESTED: null,
	IMAGE_DELETE_REQUESTED: null,
	IMAGE_SET: null,
	IMAGE_CLEARED: null,
});

export default actions;
