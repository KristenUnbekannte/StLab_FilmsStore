import { takeLatest, call, put } from 'redux-saga/effects';
import {
	imagesLoaded,
	imagesError,
} from '../modules/ImagesList/actions/ImagesActions';
import actionTypes from '../modules/ImagesList/actions/actionTypes';
import axios from 'axios';

export function* watcherImages() {
	yield takeLatest(actionTypes.IMAGES_REQUESTED, imageSaga);
}

function axiosImages(action) {
	return axios({
		...action.request,
	});
}

function* imageSaga(action) {
	try {
		const response = yield call(axiosImages, action);
		const images = response.data;

		yield put(imagesLoaded(images));
	} catch (error) {
		yield put(imagesError(error.toString()));
	}
}
