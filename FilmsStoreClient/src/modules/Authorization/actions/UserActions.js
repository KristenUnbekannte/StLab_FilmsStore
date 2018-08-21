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