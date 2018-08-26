import actionTypes from './actionTypes';
import baseUrl from '../../../Common/BaseUrl';
import header from '../../../Common/FetchHeader';

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
export const ratingSendRequested = (data, history) => {
	return {
		type: actionTypes.RATING_SEND_REQUESTED,
		request: {
			method: 'post',
			url: `${baseUrl}/rating`,
			data: data,
			headers: header(),
		},
		history,
	};
};
