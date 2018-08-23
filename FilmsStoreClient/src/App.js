import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Header from './modules/Header/view';
import Routes from './Routes';
import FilmsListReducer from './modules/FilmsList/reducers/FilmsListReducer';
import FilmDetailsReducer from './modules/FilmDetails/reducers/FilmDetailsReducer';
import UserReducer from './modules/Authorization/reducers/UserReducer';
import CommentsListReducer from './modules/CommentsList/reducers/CommentsListReducer';
import RatingReducer from './modules/StarsRating/reducers/RatingReducer';

const reducers = combineReducers({
	form: formReducer,
	films: FilmsListReducer,
	filmDetails: FilmDetailsReducer,
	user: UserReducer,
	comments: CommentsListReducer,
	rating: RatingReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<React.Fragment>
						<Header />
						<Routes/>
					</React.Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
