import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const DialogAlert = ({
	open,
	handleClickOpen,
	handleClose,
	filmDelete,
	filmName,
	classes,
}) => {
	return (
		<React.Fragment>
			<Button
				color="secondary"
				onClick={handleClickOpen}
				className={classes.button}
			>
				<DeleteIcon />
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle id="alert-dialog-title">
					{`Are you sure you want to delete the movie '${filmName}'?`}
				</DialogTitle>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={filmDelete} autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

DialogAlert.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
	filmDelete: PropTypes.func.isRequired,
	filmName: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogAlert);
