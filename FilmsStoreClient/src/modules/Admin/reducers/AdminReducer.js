import actionTypes from '../actions/actionTypes';
import TokenService from '../../../Services/TokenService';

const initialState = {};

const AdminReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FILM_ADD_REQUESTED:
			return {
				...state,
			};
		case actionTypes.FILM_DELETE_REQUESTED:
			return {
				...state,
			};
		default:
			return state;
	}
};
export default AdminReducer;
