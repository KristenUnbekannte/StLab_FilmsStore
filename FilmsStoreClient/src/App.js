import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RegistrationContainer from './modules/Authorization/Register/container/RegistrationContainer';
import LoginContainer from './modules/Authorization/Login/container/LoginContainer';
import FilmsListContainer from './modules/FilmsList/containers/FilmsListContainer';
import FilmDetailsContainer from './modules/FilmDetails/containers/FilmDetailsContainer';
import Header from './modules/Header/view';
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
						<Switch>
							<Route exact path="/" component={FilmsListContainer} />
							<Route exact path="/register" component={RegistrationContainer} />
							<Route exact path="/login" component={LoginContainer} />
							<Route exact path="/film/:id" component={FilmDetailsContainer} />
						</Switch>
					</React.Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
