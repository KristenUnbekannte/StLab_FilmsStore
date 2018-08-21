import React from 'react';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

const renderField = ({ input, type, classes, isAuth }) => {
	return (
		<Input
			{...input}
			placeholder="Comment"
			type={type}
			className={classes.input}
			disabled={!isAuth}
		/>
	);
};

renderField.propTypes = {
	input: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
	isAuth: PropTypes.bool.isRequired,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(renderField);
