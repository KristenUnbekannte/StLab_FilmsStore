import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegistrationContainer from './modules/Authorization/Register/container/RegistrationContainer';
import LoginContainer from './modules/Authorization/Login/container/LoginContainer';
import FilmsListContainer from './modules/FilmsList/containers/FilmsListContainer';
import FilmDetailsContainer from './modules/FilmDetails/containers/FilmDetailsContainer';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={FilmsListContainer} />
                <Route exact path="/register" component={RegistrationContainer} />
                <Route exact path="/login" component={LoginContainer} />
                <Route exact path="/film/:id" component={FilmDetailsContainer} />
            </Switch>
        );
    }
}

export default Routes;