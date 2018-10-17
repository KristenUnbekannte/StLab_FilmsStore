import actionTypes from '../actions/actionTypes';

const initialState = {
	value: 0,
};

const RatingReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RATING_SEND_REQUESTED:
			return {
				...state,
			};
		case actionTypes.RATING_SET:
			return {
				...state,
				value: action.value,
			};
		case actionTypes.RATING_CLEARED:
			return {
				...state,
				value: 0,
			};
		default:
			return state;
	}
};
export default RatingReducer;
