import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './styles';

const AddFilm = ({ classes }) => {
	return (
		<Card className={classes.card}>
			<Button
				variant="fab"
				color="secondary"
				className={classes.addButton}
				component={Link}
				to={`admin/film/add`}
			>
				<AddIcon />
			</Button>
		</Card>
	);
};

AddFilm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddFilm);
