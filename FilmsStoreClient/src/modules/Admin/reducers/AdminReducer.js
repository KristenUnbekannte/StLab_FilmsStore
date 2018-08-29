import actionTypes from '../actions/actionTypes';

const initialState = {
	imageId: 0,
	url: '',
	filmId: 0
};

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
		case actionTypes.IMAGE_ADD_REQUESTED:
			return {
				...state,
			};
		case actionTypes.IMAGE_DELETE_REQUESTED:
			return {
				...state,
			};
		case actionTypes.IMAGE_SET:
			return {
				...state,
				...action.image
			};
		case actionTypes.IMAGE_CLEARED:
			return {
				...state,
				...initialState
			};
		default:
			return state;
	}
};
export default AdminReducer;
