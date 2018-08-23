import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import TokenService from '../../../../Services/TokenService';
import * as actions from '../../actions/UserActions';
import baseUrl from '../../../../Common/BaseUrl';
import Registration from '../view';

class RegistrationContainer extends React.PureComponent {
	constructor(props) {
		super(props);

		this.props.registrationErrorCleared();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		axios
			.post(`${baseUrl}/account/register`, {
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
					? this.props.registrationErrorSet(error.response.data.toString())
					: this.props.registrationErrorSet(error.toString());
			});
	}

	render() {
		return (
			<Registration
				onSubmit={this.handleSubmit}
				registrationError={this.props.registrationError}
			/>
		);
	}
}

RegistrationContainer.propTypes = {
	isAuthorized: PropTypes.bool.isRequired,
	userAuthorized: PropTypes.func.isRequired,
	registrationError: PropTypes.string.isRequired,
	registrationErrorSet: PropTypes.func.isRequired,
	registrationErrorCleared: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	return {
		...state.user,
	};
};
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ ...actions }, dispatch);
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegistrationContainer);
