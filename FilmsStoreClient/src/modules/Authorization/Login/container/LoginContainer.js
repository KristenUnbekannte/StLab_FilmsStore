import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validatePassword } from '../../../../Common/FormValidation';
import TokenService from '../../../../Services/TokenService';
import * as actions from '../../actions/UserActions';
import baseUrl from '../../../../Common/BaseUrl';
import Login from '../view';

class LoginContainer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateValues = this.validateValues.bind(this);
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
				if (error.response) {
					this.setState({ error: error.response.data.toString() });
				} else {
					this.setState({ error: error.toString() });
				}
			});
	}

	validateValues(values) {
		const errors = {};
		if (!values.userName) {
			errors.userName = 'Field must not be empty';
		}
		if (!values.password || !validatePassword(values.password)) {
			errors.password = 'Field must contain at least 6 characters';
		}
		return errors;
	}
	render() {
		return (
			<Login
				onSubmit={this.handleSubmit}
				loginError={this.state.error}
				validate={this.validateValues}
			/>
		);
	}
}

LoginContainer.propTypes = {
	isAuthorized: PropTypes.bool.isRequired,
	userAuthorized: PropTypes.func.isRequired,
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
