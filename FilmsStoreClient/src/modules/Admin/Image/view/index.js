import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
	Card,
	CardMedia,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteAlert from '../../DeleteAlert/view';
import EditImageContainer from '../../Forms/EditImages/container/EditImagesContainer';
import styles from './styles';

const Film = ({
	classes,
	image,
	open,
	handleClickOpen,
	handleClose,
	ImageDelete,
	index
}) => {
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.cover}
				image={image.url}
				title="image"
			/>
				<div className={classes.buttonContainer}>
				<EditImageContainer index={index} icon = {<EditIcon/>} img = {image}/>
					<DeleteAlert
						itemName = "image"
						open={open}
						handleClickOpen={handleClickOpen}
						handleClose={handleClose}
						ItemDelete={ImageDelete}
					/>
				</div>
		</Card>
	);
};

Film.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	ImageDelete: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	image: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

export default withStyles(styles)(Film);
