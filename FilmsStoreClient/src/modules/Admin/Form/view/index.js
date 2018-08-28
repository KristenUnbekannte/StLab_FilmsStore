import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
	validateYear,
	validateUserName,
} from '../../../../Common/FormValidation';
import PropTypes from 'prop-types';
import renderField from './renderFiled';
import { compose } from 'redux';
import styles from './styles';

let EditFilmForm = ({ handleSubmit, classes, imageUrl, images }) => {
	return (
		<Paper className={classes.container}>
			<img src={imageUrl} alt="poster" className={classes.image} />
			<form onSubmit={handleSubmit} className={classes.form}>
				<Field
					name="name"
					component={renderField}
					type="text"
					label="Name"
					validate={validateUserName}
				/>
				<Field
					name="country"
					component={renderField}
					type="text"
					label="Country"
					validate={validateUserName}
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
					validate={validateUserName}
				/>
				<Field
					name="producer"
					component={renderField}
					type="text"
					label="Producer"
					validate={validateUserName}
				/>
				<Field
					name="imageUrl"
					component={renderField}
					type="text"
					label="imageUrl"
					validate={validateUserName}
					multiline={true}
					rows={1}
					rowsMax={3}
				/>
				<Field
					name="videoUrl"
					component={renderField}
					type="text"
					label="videoUrl"
					validate={validateUserName}
					multiline={true}
					rows={1}
					rowsMax={3}
				/>
				<Field
					name="description"
					component={renderField}
					type="text"
					label="Description"
					validate={validateUserName}
					multiline={true}
					rows={2}
					rowsMax={4}
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
