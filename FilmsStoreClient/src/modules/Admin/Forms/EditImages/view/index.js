import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { validateSimpleField } from '../../../../../Common/FormValidation';
import PropTypes from 'prop-types';
import renderField from './renderFiled';
import styles from './styles';

let EditImagesForm = ({ handleSubmit, classes, url }) => {
	return (
		<div>
			<img src={url} alt="movie" className={classes.image}/>
			<form onSubmit={handleSubmit} className={classes.form}>
				<Field
					name="url"
					component={renderField}
					type="text"
					label="Url"
					rows={1}
					multiline={true}
					rowsMax={5}
					validate={validateSimpleField}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={classes.button}
				>
					Save
			</Button>
			</form>
		</div>
	);
};

EditImagesForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	url : PropTypes.string,
	form: PropTypes.string.isRequired,
};

EditImagesForm = compose(
	connect(state => ({
		initialValues: { ...state.admin },
	})),
	reduxForm({
		form: 'editImage',
		enableReinitialize: true,
	})
)(EditImagesForm);

export default withStyles(styles)(EditImagesForm);
