import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import renderField from './renderFiled';
import Alert from '../../../Alert/view';
import styles from './styles';

let RegistrationForm = ({ handleSubmit, registrationError, classes }) => {
	return (
		<Paper className={classes.container}>
			<img
				src="https://gifer.com/i/VVKb.gif"
				alt="joke"
				className={classes.image}
			/>
			{registrationError ? <Alert error={registrationError} /> : null}
			<form onSubmit={handleSubmit}>
				<Field
					name="userName"
					component={renderField}
					type="text"
					label="Username"
				/>
				<Field
					name="password"
					component={renderField}
					type="password"
					label="Password"
				/>
				<Field
					name="confirmPassword"
					component={renderField}
					type="password"
					label="Confirm password"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={classes.button}
				>
					Отправить
				</Button>
			</form>
		</Paper>
	);
};

RegistrationForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	registrationError: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
	form: PropTypes.string.isRequired,
};

RegistrationForm = reduxForm({
	form: 'login',
})(RegistrationForm);

export default withStyles(styles)(RegistrationForm);
