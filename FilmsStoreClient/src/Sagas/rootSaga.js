import { all } from 'redux-saga/effects';
import { watcherFilms } from './FilmsSaga';
import { watcherFilmDetails } from './FilmDetailsSaga';
import { watcherComments } from './CommentSaga';
import { watcherRating } from './RatingSaga';
import { watcherAuth } from './AuthorizationSaga';

export function* rootSaga() {
	yield all([
		watcherFilms(),
		watcherFilmDetails(),
		watcherComments(),
		watcherRating(),
		watcherAuth(),
	]);
}
