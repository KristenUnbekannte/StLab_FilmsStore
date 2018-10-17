import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import { rootSaga } from './Sagas/rootSaga';
import Header from './modules/Header/view';
import Routes from './Routes/Routes';
import FilmsListReducer from './modules/FilmsList/reducers/FilmsListReducer';
import FilmDetailsReducer from './modules/FilmDetails/reducers/FilmDetailsReducer';
import UserReducer from './modules/Authorization/reducers/UserReducer';
import CommentsListReducer from './modules/CommentsList/reducers/CommentsListReducer';
import RatingReducer from './modules/StarsRating/reducers/RatingReducer';
import ImagesReducer from './modules/ImagesList/reducers/ImagesReducer';
import AdminReducer from './modules/Admin/reducers/AdminReducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
	form: formReducer,
	films: FilmsListReducer,
	filmDetails: FilmDetailsReducer,
	user: UserReducer,
	comments: CommentsListReducer,
	rating: RatingReducer,
	images: ImagesReducer,
	admin: AdminReducer,
});
const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
	reducers,
	reduxDevTools,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<React.Fragment>
						<Header />
						<Routes />
					</React.Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
