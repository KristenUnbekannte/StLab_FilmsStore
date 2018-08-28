import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationContainer from './modules/Authorization/Register/container/RegistrationContainer';
import LoginContainer from './modules/Authorization/Login/container/LoginContainer';
import FilmsListContainer from './modules/FilmsList/containers/FilmsListContainer';
import FilmDetailsContainer from './modules/FilmDetails/containers/FilmDetailsContainer';
import AdminFilmListContainer from './modules/Admin/Film/container/AdminFilmListContainer';
import EditFilmContainer from './modules/Admin/Form/container/EditFilmContainer';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={FilmsListContainer} />
				<Route exact path="/register" component={RegistrationContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/film/:id" component={FilmDetailsContainer} />
				<Route exact path="/admin" component={AdminFilmListContainer} />
				<Route exact path="/admin/film/:id" component={EditFilmContainer} />
				<Route exact path="/admin/film/add" component={EditFilmContainer} />
				<Route children={() => <h2>404 - Not found</h2>} />
			</Switch>
		);
	}
}

export default Routes;
