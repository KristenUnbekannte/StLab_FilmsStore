import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Film from '../../Film/view';
import Alert from '../../Alert/view';
import styles from './styles';

const FilmList = ({ classes, error, isLoaded, page, films }) => {
	return (
		<React.Fragment>
			{error ? (
				<Alert error={error} />
			) : !isLoaded && page === 1 ? (
				<div className={classes.progress}>
					<CircularProgress size={80} color="secondary" />
				</div>
			) : (
				<div className={classes.container}>
					{films.map((item, i) => {
						return <Film key={i} {...item} />;
					})}
				</div>
			)}
		</React.Fragment>
	);
};

FilmList.propTypes = {
	classes: PropTypes.object.isRequired,
	films: PropTypes.array,
	isLoaded: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired,
	page: PropTypes.number.isRequired,
};

export default withStyles(styles)(FilmList);
