import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
	validatePassword,
	validateUserName,
	validateMatchPassword,
} from '../../../../Common/FormValidation';
import PropTypes from 'prop-types';
import renderField from './renderFiled';
import Alert from '../../../Alert/view';
import styles from './styles';

let RegistrationForm = ({ handleSubmit, authError, classes }) => {
	return (
		<Paper className={classes.container}>
			<img
				src="https://cdn-images-1.medium.com/max/1600/1*a4wtjbUyx9VHZmOO0AnI5w.gif"
				alt="joke"
				className={classes.image}
			/>
			{authError ? <Alert error={authError} /> : null}
			<form onSubmit={handleSubmit}>
				<Field
					name="userName"
					component={renderField}
					type="text"
					label="Username"
					validate={validateUserName}
				/>
				<Field
					name="password"
					component={renderField}
					type="password"
					label="Password"
					validate={validatePassword}
				/>
				<Field
					name="confirmPassword"
					component={renderField}
					type="password"
					label="Confirm password"
					validate={[validatePassword, validateMatchPassword]}
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
	authError: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
	form: PropTypes.string.isRequired,
};

RegistrationForm = reduxForm({
	form: 'registration',
})(RegistrationForm);

export default withStyles(styles)(RegistrationForm);
