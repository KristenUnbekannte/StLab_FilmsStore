import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import StarsRatingContainer from '../containers/StarsRatingContainer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const DialogAlert = ({
	classes,
	open,
	handleClickOpen,
	handleClose,
	ratingSend,
}) => {
	return (
		<div>
			<Button onClick={handleClickOpen} className={classes.button}>
				Rate
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{'You can rate the movie'}
				</DialogTitle>
				<StarsRatingContainer />
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={ratingSend} autoFocus>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

DialogAlert.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	ratingSend: PropTypes.func.isRequired,
};

export default withStyles(styles)(DialogAlert);
