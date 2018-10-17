import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import RegistrationContainer from '../modules/Authorization/Register/container/RegistrationContainer';
import LoginContainer from '../modules/Authorization/Login/container/LoginContainer';
import FilmsListContainer from '../modules/FilmsList/containers/FilmsListContainer';
import FilmDetailsContainer from '../modules/FilmDetails/containers/FilmDetailsContainer';
import AdminFilmsListContainer from '../modules/Admin/FilmsList/container/AdminFilmsListContainer';
import EditFilmContainer from '../modules/Admin/Forms/EditFilm/container/EditFilmContainer';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={FilmsListContainer} />
				<Route exact path="/register" component={RegistrationContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/film/:id" component={FilmDetailsContainer} />
				<PrivateRoute exact path="/admin" component={AdminFilmsListContainer} />
				<PrivateRoute
					exact
					path="/admin/film/:id?"
					component={EditFilmContainer}
				/>
				<Route children={() => <h2>404 - Not found</h2>} />
			</Switch>
		);
	}
}

export default Routes;
