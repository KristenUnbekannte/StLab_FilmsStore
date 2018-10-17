import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
	validateYear,
	validateSimpleField,
} from '../../../../../Common/FormValidation';
import PropTypes from 'prop-types';
import renderField from './renderFiled';
import styles from './styles';

let EditFilmForm = ({ handleSubmit, classes, imageUrl, filmId }) => {
	return (
		<Paper className={classes.container}>
			<img src={imageUrl} alt="poster" className={classes.image} />
			<form onSubmit={handleSubmit} className={classes.form}>
				<Field
					name="name"
					component={renderField}
					type="text"
					label="Name"
					validate={validateSimpleField}
				/>
				<Field
					name="country"
					component={renderField}
					type="text"
					label="Country"
					validate={validateSimpleField}
					multiline={true}
					rows={1}
					rowsMax={2}
				/>
				<Field
					name="year"
					component={renderField}
					type="text"
					label="Year"
					validate={validateYear}
				/>
				<Field
					name="genre"
					component={renderField}
					type="text"
					label="Genre"
					validate={validateSimpleField}
				/>
				<Field
					name="producer"
					component={renderField}
					type="text"
					label="Producer"
					validate={validateSimpleField}
				/>
				<Field
					name="imageUrl"
					component={renderField}
					type="text"
					label="imageUrl"
					validate={validateSimpleField}
					multiline={true}
					rows={1}
					rowsMax={3}
				/>
				<Field
					name="videoUrl"
					component={renderField}
					type="text"
					label="videoUrl"
					validate={validateSimpleField}
					multiline={true}
					rows={1}
					rowsMax={3}
				/>
				<Field
					name="description"
					component={renderField}
					type="text"
					label="Description"
					validate={validateSimpleField}
					multiline={true}
					rows={1}
					rowsMax={10}
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
		</Paper>
	);
};

EditFilmForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	form: PropTypes.string.isRequired,
	imageUrl: PropTypes.string,
	images: PropTypes.array,
};

EditFilmForm = compose(
	connect(state => ({
		initialValues: { ...state.filmDetails },
	})),
	reduxForm({
		form: 'editfilm',
		enableReinitialize: true,
	})
)(EditFilmForm);

export default withStyles(styles)(EditFilmForm);
