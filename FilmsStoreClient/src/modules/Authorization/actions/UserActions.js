import actionTypes from './actionTypes';

export const userAuthorized = () => {
	return {
		type: actionTypes.USER_AUTHORIZED,
	};
};
export const userUnauthorized = () => {
	return {
		type: actionTypes.USER_UNAUTHORIZED,
	};
};
export const loginErrorSet = error => {
	return {
		type: actionTypes.LOGIN_ERROR_SET,
		error,
	};
};
export const loginErrorCleared = () => {
	return {
		type: actionTypes.LOGIN_ERROR_CLEARED,
	};
};
export const registrationErrorSet = error => {
	return {
		type: actionTypes.REGISTRATION_ERROR_SET,
		error,
	};
};
export const registrationErrorCleared = () => {
	return {
		type: actionTypes.REGISTRATION_ERROR_CLEARED,
	};
};
