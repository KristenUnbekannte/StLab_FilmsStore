import actionTypes from './actionTypes';
import baseUrl from '../../../Common/BaseUrl';
import header from '../../../Common/AxiosHeader';

export const filmAddRequested = (data, history) => {
	return {
		type: actionTypes.FILM_ADD_REQUESTED,
		request: {
			method: 'post',
			url: `${baseUrl}/admin/film`,
			data: data,
			headers: header(),
		},
		history,
	};
};
export const filmDeleteRequested = id => {
	return {
		type: actionTypes.FILM_DELETE_REQUESTED,
		request: {
			method: 'delete',
			url: `${baseUrl}/admin/film/${id}`,
			headers: header(),
		},
	};
};
export const imagesAddRequested = data => {
	return {
		type: actionTypes.IMAGE_ADD_REQUESTED,
		request: {
			method: 'post',
			url: `${baseUrl}/admin/image`,
			data: data,
			headers: header(),
		},
	};
};
export const imageDeleteRequested = id => {
	return {
		type: actionTypes.IMAGE_DELETE_REQUESTED,
		request: {
			method: 'delete',
			url: `${baseUrl}/admin/image/${id}`,
			headers: header(),
		},
	};
};
export const imageSet = image => {
	return {
		type: actionTypes.IMAGE_SET,
		image,
	};
};
export const imageCleared = () => {
	return {
		type: actionTypes.IMAGE_CLEARED,
	};
};
