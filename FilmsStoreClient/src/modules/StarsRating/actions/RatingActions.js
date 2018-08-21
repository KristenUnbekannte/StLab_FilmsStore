import actionTypes from './actionTypes';

export const ratingSet = value => {
	return {
		type: actionTypes.RATING_SET,
		value,
	};
};
export const ratingCleared = () => {
	return {
		type: actionTypes.RATING_CLEARED,
	};
};
