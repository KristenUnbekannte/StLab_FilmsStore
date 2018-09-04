import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { Avatar, Typography, Paper } from '@material-ui/core';
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import StarIcon from '@material-ui/icons/Star';
import ImagesListContainer from '../../ImagesList/container/ImagesListContainer';
import CommentsListContainer from '../../CommentsList/container/CommentsListContainer';
import AlertDialogContainer from '../../StarsRating/containers/AlertDialogContainer';
import styles from './styles';

const FilmDetail = ({ classes, film, history }) => {
	return (
		<React.Fragment>
			{film.isLoaded ? (
				<Paper className={classes.body}>
					<Card className={classes.card}>
						<div className={classes.cover}>
							<CardMedia
								className={classes.cover}
								image={film.imageUrl}
								title={film.name}
							/>
						</div>
						<div className={classes.details}>
							<CardContent>
								<Typography variant="headline">{film.name}</Typography>
								<Typography variant="subheading">({film.year})</Typography>
								<div className={classes.starsContainer}>
									<StarIcon
										className={
											film.isUserRated ? classes.starGold : classes.starEmpty
										}
									/>
									<Avatar className={classes.orangeAvatar}>
										{film.rating.toString()}
									</Avatar>
								</div>
								<Table padding="checkbox">
									<TableBody>
										<TableRow>
											<TableCell variant="head">Genre</TableCell>
											<TableCell>{film.genre}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell variant="head">Country</TableCell>
											<TableCell>{film.country}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell variant="head">Producer</TableCell>
											<TableCell>{film.producer}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<Typography variant="body2">{film.description}</Typography>
							</CardContent>
							<div className={classes.alertButton}>
								<AlertDialogContainer history={history} />
							</div>
						</div>
					</Card>
					<Card className={classes.video}>
						<iframe
							title={film.name}
							width="800"
							height="400"
							src={film.videoUrl}
							frameBorder="0"
							allow="autoplay; encrypted-media"
							allowFullScreen
						/>
					</Card>
					<ImagesListContainer filmId={film.filmId} />
					<CommentsListContainer filmId={film.filmId} history={history} />
				</Paper>
			) : (
				<div className={classes.progress}>
					<CircularProgress size={80} color="secondary" />
				</div>
			)}
		</React.Fragment>
	);
};

FilmDetail.propTypes = {
	classes: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	film: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilmDetail);
