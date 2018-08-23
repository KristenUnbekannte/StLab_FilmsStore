import actionTypes from '../actions/actionTypes';
import TokenService from '../../../Services/TokenService';

const initialState = {
	isAuthorized: TokenService.isSetToken(),
	loginError: '',
	registrationError: '',
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_AUTHORIZED:
			return {
				...state,
				isAuthorized: true,
			};
		case actionTypes.USER_UNAUTHORIZED:
			return {
				...state,
				isAuthorized: false,
			};
		case actionTypes.LOGIN_ERROR_SET:
			return {
				...state,
				loginError: action.error,
			};
		case actionTypes.LOGIN_ERROR_CLEARED:
			return {
				...state,
				loginError: '',
			};
		case actionTypes.REGISTRATION_ERROR_SET:
			return {
				...state,
				registrationError: action.error,
			};
		case actionTypes.REGISTRATION_ERROR_CLEARED:
			return {
				...state,
				registrationError: '',
			};
		default:
			return state;
	}
};
export default UserReducer;
