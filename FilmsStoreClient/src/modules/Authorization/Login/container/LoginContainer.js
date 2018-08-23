import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TokenService from '../../../../Services/TokenService';
import * as actions from '../../actions/UserActions';
import baseUrl from '../../../../Common/BaseUrl';
import Login from '../view';

class LoginContainer extends React.PureComponent {
	constructor(props) {
		super(props);

		this.props.loginErrorCleared();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		axios
			.post(`${baseUrl}/account/login`, {
				username: values.userName,
				password: values.password,
			})
			.then(response => {
				TokenService.setToken(response.data.access_token);
				this.props.userAuthorized();
				this.props.history.push(window.history.back());
			})
			.catch(error => {
				error.response
					? this.props.loginErrorSet(error.response.data.toString())
					: this.props.loginErrorSet(error.toString());
			});
	}

	render() {
		return <Login onSubmit={this.handleSubmit} loginError={this.props.loginError} />;
	}
}

LoginContainer.propTypes = {
	isAuthorized: PropTypes.bool.isRequired,
	userAuthorized: PropTypes.func.isRequired,
	loginError: PropTypes.string.isRequired,
	loginErrorSet: PropTypes.func.isRequired,
	loginErrorCleared: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return { ...state.user };
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginContainer);
