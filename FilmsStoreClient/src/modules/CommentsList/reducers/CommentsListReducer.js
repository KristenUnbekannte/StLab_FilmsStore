import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoaded: false,
	error: '',
	comments: [],
};

const CommentsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.COMMENT_SEND_REQUESTED:
			return {
				...state,
			};
		case actionTypes.COMMENTS_GET_REQUESTED:
			return {
				...state,
				isLoaded: false,
			};
		case actionTypes.COMMENTS_LOADED:
			return {
				...state,
				comments: action.comments,
				isLoaded: true,
				error: '',
			};
		case actionTypes.COMMENTS_ERROR:
			return {
				...state,
				error: action.error,
				isLoaded: false,
			};
		case actionTypes.COMMENT_REQUESTED:
			return {
				...state,
				comments: [...state.comments, action.comment],
			};
		default:
			return state;
	}
};
export default CommentsListReducer;
