import actionTypes from './actionTypes';
import baseUrl from '../../../Common/BaseUrl';

export const imagesRequested = id => {
	return {
		type: actionTypes.IMAGES_REQUESTED,
		request: {
			method: 'get',
			url: `${baseUrl}/images/${id}`,
		},
	};
};
export const imagesLoaded = images => {
	return {
		type: actionTypes.IMAGES_LOADED,
		images,
	};
};
export const imagesError = error => {
	return {
		type: actionTypes.IMAGES_ERROR,
		error,
	};
};
