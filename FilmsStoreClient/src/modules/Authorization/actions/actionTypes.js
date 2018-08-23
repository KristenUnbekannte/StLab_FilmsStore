import keymirror from 'keymirror';

const actions = keymirror({
	USER_AUTHORIZED: null,
	USER_UNAUTHORIZED: null,
	LOGIN_ERROR_SET: null,
	LOGIN_ERROR_CLEARED: null,
	REGISTRATION_ERROR_SET: null,
	REGISTRATION_ERROR_CLEARED: null,
});

export default actions;
