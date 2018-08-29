import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Avatar,
	Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import StarIcon from '@material-ui/icons/Star';
import DeleteAlert from '../../DeleteAlert/view';
import styles from './styles';

const Film = ({
	classes,
	film,
	open,
	handleClickOpen,
	handleClose,
	filmDelete,
}) => {
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.cover}
				image={film.imageUrl}
				title={film.name}
			/>
			<div className={classes.details}>
				<CardContent>
					<Typography variant="subheading">{film.name}</Typography>
					<Typography variant="subheading" color="textSecondary">
						{film.year}
					</Typography>
					<div className={classes.starsContainer}>
						<StarIcon className={classes.starGold} />
						<Avatar className={classes.orangeAvatar}>{`${film.rating}`}</Avatar>
					</div>
				</CardContent>
				<div className={classes.buttonContainer}>
					<Button
						color="primary"
						component={Link}
						to={`admin/film/${film.filmId}`}
						className={classes.button}
					>
						<EditIcon />
					</Button>
					<DeleteAlert
						itemName={film.name}
						open={open}
						handleClickOpen={handleClickOpen}
						handleClose={handleClose}
						ItemDelete={filmDelete}
					/>
				</div>
			</div>
		</Card>
	);
};

Film.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	filmDelete: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	film: PropTypes.object.isRequired,
};

export default withStyles(styles)(Film);
