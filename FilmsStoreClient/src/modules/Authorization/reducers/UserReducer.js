import actionTypes from '../actions/actionTypes';
import TokenService from '../../../Services/TokenService';

const initialState = {
	isAuthorized: TokenService.isSetToken(),
	authError: '',
};

const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_REQUESTED:
			return {
				...state,
			};
		case actionTypes.USER_AUTHORIZED:
			return {
				...state,
				isAuthorized: true,
				authError: '',
			};
		case actionTypes.USER_UNAUTHORIZED:
			return {
				...state,
				isAuthorized: false,
			};
		case actionTypes.AUTH_ERROR_SET:
			return {
				...state,
				authError: action.error,
			};
		case actionTypes.AUTH_ERROR_CLEARED:
			return {
				...state,
				authError: '',
			};
		default:
			return state;
	}
};
export default UserReducer;
