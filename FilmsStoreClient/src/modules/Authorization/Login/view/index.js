import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
	validatePassword,
	validateSimpleField,
} from '../../../../Common/FormValidation';
import renderField from './renderFiled';
import Alert from '../../../Alert/view';
import styles from './styles';

let LoginForm = ({ handleSubmit, authError, classes }) => {
	return (
		<Paper className={classes.container}>
			<img
				src="https://media.tenor.com/images/41a0802c644036ad7f9e6830fbc8cafa/tenor.gif"
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
					validate={validateSimpleField}
				/>
				<Field
					name="password"
					component={renderField}
					type="password"
					label="Password"
					validate={validatePassword}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={classes.button}
				>
					Send
				</Button>
			</form>
		</Paper>
	);
};

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	authError: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
	form: PropTypes.string.isRequired,
};

LoginForm = reduxForm({
	form: 'login',
})(LoginForm);

export default withStyles(styles)(LoginForm);
