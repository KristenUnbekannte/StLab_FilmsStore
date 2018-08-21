import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import renderField from './renderFiled';
import Alert from '../../../Alert/view';
import styles from './styles';

let LoginForm = ({ handleSubmit, loginError, classes }) => {
	return (
		<Paper className={classes.container}>
			<img
				src="https://media.tenor.com/images/41a0802c644036ad7f9e6830fbc8cafa/tenor.gif"
				alt="joke"
				className={classes.image}
			/>
			{loginError ? <Alert error={loginError} /> : null}
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

LoginForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	loginError: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
	form: PropTypes.string.isRequired,
};

LoginForm = reduxForm({
	form: 'login',
})(LoginForm);

export default withStyles(styles)(LoginForm);
