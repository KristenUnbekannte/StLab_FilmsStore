import React from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

const renderField = ({
	input,
	label,
	type,
	meta: { touched, error },
	classes,
	multiline,
	rows,
	rowsMax,
}) => {
	return (
		<FormControl>
			<InputLabel htmlFor={`custom-css-input-${label}`}>{label}</InputLabel>
			<Input
				error={error && touched}
				{...input}
				type={type}
				id={`custom-css-input-${label}`}
				className={classes.input}
				multiline={multiline}
				rows={rows}
				rowsMax={rowsMax}
			/>
			<div className={classes.error}>
				{touched && (error && <span>{error}</span>)}
			</div>
		</FormControl>
	);
};

renderField.propTypes = {
	input: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	meta: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
	multiline: PropTypes.bool,
	rows: PropTypes.number,
	rowsMax: PropTypes.number,
};

export default withStyles(styles)(renderField);
