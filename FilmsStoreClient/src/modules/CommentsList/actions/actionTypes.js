import keymirror from 'keymirror';

const actions = keymirror({
	COMMENT_SEND_REQUESTED: null,
	COMMENTS_GET_REQUESTED: null,
	COMMENTS_LOADED: null,
	COMMENTS_ERROR: null,
});

export default actions;
