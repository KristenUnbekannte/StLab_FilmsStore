import actionTypes from '../actions/actionTypes';

const initialState = {
	isLoaded: false,
	error: '',
	images: [],
};

const ImagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.IMAGES_REQUESTED:
			return {
				...state,
				isLoaded: false,
			};
		case actionTypes.IMAGES_LOADED:
			return {
				...state,
				isLoaded: true,
				error: '',
				images: action.images,
			};
		case actionTypes.IMAGES_ERROR:
			return {
				...state,
				error: action.error,
				isLoaded: false,
			};
		default:
			return state;
	}
};
export default ImagesReducer;
